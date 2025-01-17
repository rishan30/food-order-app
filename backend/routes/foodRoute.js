import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();



const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads"); // Ensure the "uploads" directory exists
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
});

const upload = multer({ storage: Storage });




// foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.post("/add", upload.single("image"), (req, res, next) => {
    console.log("File received:", req.file);
    console.log("Request body:", req.body);
    next(); // Proceed to the `addFood` controller
}, addFood);

foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood)


export default foodRouter;
