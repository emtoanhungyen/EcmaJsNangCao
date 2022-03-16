import News from "../models/new";

export const postNews = async (req, res) => {
    try {
        const news = await new News(req.body).save();
        res.json(news);
    } catch (error) {
        res.status(400).json({
            error: "Khong them duoc bai viet",
        });
    }
};