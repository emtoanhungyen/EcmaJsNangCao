import jwt from "jsonwebtoken";
import User from "../models/user";

export const signup = async (req, res) => {
    const { email, tentk, password } = req.body;
    try {
        const checkUser = await User.findOne({ email }).exec();
        if (checkUser) {
            res.status(400).json({
                message: "Tai khoan da ton tai",
            });
        }
        const user = new User({ email, tentk, password }).save();
        res.json({
            user: {
                _id: user.id,
                email: user.email,
                tentk: user.tentk,
            },
        });
        console.log("Dang ky thanh cong roi");
        // const user = await new User(req.body).save();
        // res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Đăng ký không thành công",
        });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
            res.status(400).json({
                message: "Email không tồn tại",
            });
        }
        if (!user.authenticate(password)) {
            res.status(400).json({
                message: "Mật khẩu không đúng",
            });
        }
        const token = jwt.sign({ _id: user.id }, "123456", { expiresIn: "1h" });
        res.json({
            token,
            user: {
                _id: user.id,
                email: user.email,
                tentk: user.tentk,
            },
        });
        console.log("Đăng nhập ok em ơi");
    } catch (error) {
        res.status(400).json({
            message: "Đăng nhập thất bại",
        });
    }
};