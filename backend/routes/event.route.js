const { Router } = require("express");
const multer = require("multer");
const {
    eventCreate,
    eventGetAll,
    eventGetById,
    eventUpdate,
    eventDelete,
    eventRSVP
} = require("../controllers/event.controller");
const auth = require("../middleware/auth");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); 
    }
});

const upload = multer({ storage });

const eventRoute = Router();

eventRoute.post("/",auth,upload.single('image'), eventCreate);

eventRoute.get("/",auth, eventGetAll);

eventRoute.get("/:id",auth, eventGetById);

eventRoute.put("/:id",auth, eventUpdate);

eventRoute.delete("/:id",auth, eventDelete);

eventRoute.post("/rsvp/:id", auth, eventRSVP);

module.exports = eventRoute;
