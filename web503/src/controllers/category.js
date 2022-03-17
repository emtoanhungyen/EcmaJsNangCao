import Category from "../models/category";
import Product from "../models/product";

export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Them khong thanh cong",
        });
    }
};

export const list = async (req, res) => {
    try {
        const category = await Category.find({}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay Category",
        });
    }
};

export const read = async (req, res) => {
    // const condition = { _id: req.params.id };
    try {
        const category = await Category.findOne({ _id: req.params.id }).exec();
        const product = await Product.find({ category }).select("-category").exec();
        console.log(product);
        res.json({
            category, product,
        });
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay Category",
        });
    }
};