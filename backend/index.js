const express = require("express")
const nodemailer = require("nodemailer")
const connect = require("./config/db")
const userRoute = require("./routes/user.route")
const eventRoute = require("./routes/event.route")
const app = express()
require("dotenv").config()
const port = process.env.PORT
app.use(express.json())
app.use("/user",userRoute)
app.use("/event",eventRoute)


app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
    connect()
})