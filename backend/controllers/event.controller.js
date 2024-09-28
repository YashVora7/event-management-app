const { sendEmailNotification } = require("../handleNotification");
const Event = require("../models/event.model");
const User = require("../models/user.model");

const eventCreate = async (req, res) => {
    try {
        const { title, description, date, location, maxAttendees, image } = req.body;
        const userId = req.user.userId; 
        let imagePath = req.file.path; 

        const newEvent = new Event({
            user: userId, 
            title,
            description,
            date,
            location,
            maxAttendees,
            image,
        });

        await newEvent.save();

        const user = await User.findById(userId);
        const userEmail = user.email;

        sendEmailNotification(
            userEmail,
            "Event Created Successfully",
            `Your event "${title}" has been created successfully.`
        );

        res.status(201).send("Event created successfully");
    } catch (error) {
        console.error("Error creating event:", error.message);
        res.status(500).send("Error creating event");
    }
};

const eventGetAll = async (req, res) => {
    try {
        const userId = req.user.userId;

        const { date, location, maxAttendees } = req.query;
        
        const query = { user: userId };
        
        if (date) {
            query.date = date;
        }
        
        if (location) {
            query.location = location;
        }
        
        if (maxAttendees) {
            query.maxAttendees = maxAttendees;
        }

        const events = await Event.find(query);
        res.status(200).json(events);
    } catch (error) {
        console.error("Error fetching events:", error.message);
        res.status(500).send("Error fetching events");
    }
};


const eventGetById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.userId; 
        const event = await Event.findOne({ _id: id, user: userId });
        if (!event) {
            return res.status(404).send("Event not found");
        }
        res.status(200).json(event);
    } catch (error) {
        console.error("Error fetching event:", error.message);
        res.status(500).send("Error fetching event");
    }
};

const eventUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, date, location, maxAttendees, image } = req.body;
        const userId = req.user.userId;

        const updatedEvent = await Event.findOneAndUpdate(
            { _id: id, user: userId },
            {
                title,
                description,
                date,
                location,
                maxAttendees,
                image
            },
            { new: true }
        );

        if (!updatedEvent) {
            return res.status(404).send("Event not found or you do not have permission to update this event");
        }

        res.status(200).json(updatedEvent);
    } catch (error) {
        console.error("Error updating event:", error.message);
        res.status(500).send("Error updating event");
    }
};


const eventDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.userId; 

        const deletedEvent = await Event.findOneAndDelete({ _id: id, user: userId });
        if (!deletedEvent) {
            return res.status(404).send("Event not found or you do not have permission to delete this event");
        }
        res.status(200).send("Event deleted successfully");
    } catch (error) {
        console.error("Error deleting event:", error.message);
        res.status(500).send("Error deleting event");
    }
};

const eventRSVP = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { id } = req.params; 

        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).send("Event not found");
        }

        if (event.attendees.includes(userId)) {
            return res.status(400).send("You have already RSVPed to this event");
        }

        if (event.attendees.length >= parseInt(event.maxAttendees)) {
            return res.status(400).send("Event is already at maximum capacity");
        }

        event.attendees.push(userId);
        await event.save();

        res.status(200).send("RSVP successful");
    } catch (error) {
        console.error("Error RSVPing:", error.message);
        res.status(500).send("Error RSVPing for the event");
    }
};

const eventRSVPStatus = async (req, res) => {
    try {
        const userId = req.user.userId;
        let { id } = req.params;

        let event = await Event.findById(id)

        if(!event){
            return res.status(404).send("Event not found")
        }

        let isRSVPed = await event.attendees.includes(userId)

        if(isRSVPed){
            return res.status(201).send("You are RSVPed")
        }

        if(!isRSVPed){
            return res.status(400).send("You aren't RSVPed")
        }

    } catch (error) {
        res.status(500).send("Error checking RSVP status");
    }
};

module.exports = { eventRSVPStatus };




module.exports = { eventCreate, eventGetAll, eventGetById, eventUpdate, eventDelete, eventRSVP, eventRSVPStatus };
