// fake data
// const data = [
//     { id: 1, name: "Product A" },
//     { id: 2, name: "Product B" },
// ];

import mongoose from "mongoose";

const Product = mongoose.model("Products", { name: String });

export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Khong them duoc san pham",
        });
    }
};
export const list = async (req, res) => {
    try {
        const product = await Product.find({}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay san pham",
        });
    }
};
export const get = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Khong tim thay san pham",
        });
    }
};
export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Xoa san pham khong thanh cong",
        });
    }
};
export const update = async (req, res) => {
    const condition = { id: req.params.id };
    const update = req.body;
    try {
        const product = await Product.findOneAndUpdate(condition, update).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Update san pham khong thanh cong",
        });
    }
};