import User from "../models/user";

// eslint-disable-next-line import/prefer-default-export
export const userById = async (req, res, next, id) => {
    try {
        const user = await User.find(id).exec();
        if (!user) {
            res.status(400).json({
                message: "Khong tim thay user nay",
            });
        }
        req.profile = user;
        req.profile.password = undefined;
        next();
    } catch (error) {
        console.log(error);
    }
};