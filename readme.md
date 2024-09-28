# Event Management App - Backend

This is the backend for the Event Management App. User Authentication: Secure login and registration using JWT.
Event Creation: Users can create events with details such as title, description, date, location, max attendees, and images.
Event Filtering: Users can filter events by date, location, and type.
RSVP Functionality: Users can RSVP for events, and their attendance is tracked.
Notifications: Users receive notifications for event updates.
Image Upload: Users can also upload image of event. The app uses **Node.js**, **Express.js**, and **MongoDB** (with **Mongoose** for schema definition).

## Features:
- User Authentication: Secure login and registration using JWT.
- Event Creation: Users can create events with details such as title, description, date, location, max attendees, and images.
- Event Filtering: Users can filter events by date, location, and type.
- RSVP Functionality: Users can RSVP for events, and their attendance is tracked.
- Notifications: Users receive notifications for event updates.
- Image Upload: Users can also upload image of event

## Technologies Used:
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework to handle routes and middleware.
- **MongoDB**: NoSQL database for storing event data.
- **Mongoose**: ORM for MongoDB, used to define schemas and interact with the database.
- **dotenv**: Manages environment variables.
- **JWT**: For creating and verifying tokens (JSON Web Tokens).
- **Bcrypt**: For storing hashed password in database.
- **Multer**: For handling multipart/form-data, which is used for uploading files.
- **Nodemailer**: For send notification or mail after RSVPed success message.

## API Endpoints:

### Event Routes:

| Method | Endpoint                         | Description                        |
|--------|----------------------------------|------------------------------------|
| **POST**    | `/event/`                       | Create Event                      |
| **GET**     | `/event/`                       | Fetch all events                  |
| **POST**    | `/event/:id`                    | Fetch Event By Id                 |
| **PATCH**   | `/event/:id`                    | Update Event                      |
| **DELETE**  | `/event/:id`                    | Delete Event                      |
| **POST**    | `/event/rsvp/:id`               | Confirm RSVP for an event             |
| **GET**     | `/event/rsvp_status/:id`        | Check RSVP status an event            |

*Note: If you getting error regarding routes so you can check api routes from routes folder

## Requirements:
To run this project locally, ensure you have the following installed:

- **Node.js** (v12+): [Install Node.js](https://nodejs.org/)
- **MongoDB**: Install MongoDB locally or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Installation:

1. **Clone the repository**: Download the project files to your local machine by cloning the repository.

2. **Install dependencies**: After navigating to the project directory, install all required Node.js dependencies by running the `npm install` command. This will download and set up all necessary libraries for the app.

3. **Ensure MongoDB is running**: If you're using a local MongoDB instance, make sure MongoDB is running on your system. Alternatively, if you're using a cloud-based MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), ensure your connection string in `.env` is properly set.

4. **Run the server**: Start the application server by running the appropriate command for your setup:
- If using Node.js, simply run: `node app.js`.
- If using **nodemon** (a tool for automatically restarting the server), run: `nodemon app.js`.

Once the server is up and running, your API should be accessible for use.