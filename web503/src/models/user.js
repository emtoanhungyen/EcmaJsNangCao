import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { createHmac } from "crypto";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    tentk: {
        type: String,
        required: true,
        unique: true,
    },
    salt: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: 0,
    },
}, []);

userSchema.pre("save", function (next) {
    this.salt = uuidv4();
    this.password = this.encryptPassword(this.password);
    next();
});
userSchema.methods = {
    authenticate(password) {
        return this.password === this.encryptPassword(password);
    },
    encryptPassword(password) {
        if (!password) return;
        try {
            // eslint-disable-next-line consistent-return
            return createHmac("sha256", this.salt).update(password).digest("hex");
        } catch (error) {
            console.log(error);
        }
    },
};

export default mongoose.model("user", userSchema);