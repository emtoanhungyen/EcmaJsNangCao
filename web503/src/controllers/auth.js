import User from "../models/user";

export const signup = async (req, res) => {
    const { email, tentk, pass } = req.body;
    try {
        const checkUser = await User.findOne({ email }).exec();
        if (checkUser) {
            res.status(400).json({
                message: "Tai khoan da ton tai",
            });
        }
        const user = new User({ email, tentk, pass }).save();
        res.json({
            user: {
                _id: user.id,
                email: user.email,
                tentk: user.tentk,
            },
        });

        // const user = await new User(req.body).save();
        // res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Đăng ký không thành công",
        });
    }
};
export const signin = async (req, res) => {
    try {
        const user = await new User(req.body).save();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Đăng ký không thành công",
        });
    }
};
export const listUser = async (req, res) => {
    try {
        const user = await User.find({}).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay user",
        });
    }
};
export const removeUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Xoa user khong thanh cong",
        });
    }
};