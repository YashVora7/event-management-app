Event Management System
Introduction
The Event Management System is a web application that allows users to create, view, edit, and manage events. It provides a user-friendly interface for browsing upcoming events, RSVPing to events, and receiving notifications about event updates. This project utilizes Node.js, Express.js, and MongoDB for the backend, ensuring a robust and scalable solution for managing event-related data.

Key Features:
User Authentication: Secure login and registration using JWT.
Event Creation: Users can create events with details such as title, description, date, location, max attendees, and images.
Event Filtering: Users can filter events by date, location, and type.
RSVP Functionality: Users can RSVP for events, and their attendance is tracked.
Notifications: Users receive notifications for event updates.
Image Upload: Users can also upload image of event

Running the Backend Locally
To run the backend of the Event Management System locally, follow these steps:

Prerequisites
Node.js: Make sure you have Node.js installed on your machine. You can download it from nodejs.org.
MongoDB: Ensure you have a MongoDB instance running locally or use a cloud service like MongoDB Atlas.
Steps to Run the Backend
Clone the Repository:

git clone
Install Dependencies: Navigate to the project directory and run:

Run the Server: Start the backend server with:

nodemon - you need to install globally it with npm i -g nodemon
Access the API: The server will run on http://localhost:8080. You can use tools like Postman to interact with the API.

API Endpoints
User Registration: POST /user/register
User Login: POST /user/login
Create Event: POST /event/
Get All Events: GET /event/
And More Functionality of CRUD Operations.
RSVP for Event: POST /event/rsvp
