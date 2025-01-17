import mongoose from "mongoose"

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://rishan:123@cluster0.nes4l.mongodb.net/').then(() => console.log("DB Connected"));

}