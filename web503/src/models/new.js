import mongoose, { Schema } from "mongoose";

const newSchema = new Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 200,
        unique: true,
    },
    content: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 200,
    },
}, []);
export default mongoose.model("New", newSchema);