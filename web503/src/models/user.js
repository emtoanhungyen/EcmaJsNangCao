import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    tentk: {
        type: String,
        required: true,
        unique: true,
    },
    pass: {
        type: String,
        required: true,

    },
}, []);
export default mongoose.model("user", userSchema);