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
    pass: {
        type: String,
        required: true,
    },
}, []);

userSchema.pre("save", function (next) {
    this.salt = uuidv4();
    this.pass = this.encryptPassword(this.pass);
    next();
});
userSchema.method = {
    authenticate(pass) {
        return this.pass === this.encryptPassword(pass);
    },
    encryptPassword(pass) {
        if (!pass) return;
        try {
            // eslint-disable-next-line consistent-return
            return createHmac("sha256", this.salt).update(pass).digest("hex");
        } catch (error) {
            console.log(error);
        }
    },
};

export default mongoose.model("user", userSchema);