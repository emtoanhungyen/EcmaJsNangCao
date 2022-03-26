import expressJWT from "express-jwt";

export const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if (isAdmin) {
        next();
    } else {
        console.log("Chim cút");
    }
};

export const requireSigin = expressJWT({
    algorithms: ["HS256"],
    secret: "123456",
    requestProperty: "auth",
});

export const isAuth = async (req, res, next) => {
    // eslint-disable-next-line eqeqeq
    const check = req.profile.id == req.auth.id;
    if (!check) {
        res.status(401).json({
            message: "Bạn không có quyền truy cập, kút",
        });
    }
    next();
};