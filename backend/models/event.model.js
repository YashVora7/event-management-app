const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    maxAttendees: { type: Number, required: true },
    image: { type: String },
    attendees: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model("Event", eventSchema);