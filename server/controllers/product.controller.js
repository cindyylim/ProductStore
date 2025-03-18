import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => { 
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch (error) {   
        console.error("Error in get products: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

export const createProduct = async (req, res) => {
    const product = req.body; 
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.error("Error in create product: ", error.message);
        res.status(500).json({success: false, message: "Server error"});;
    }
}

export const updateProduct = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).json({success: false, message: "Invalid product id"});
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({success: true, message: "Product updated successfully", product: updatedProduct});
    } catch (error) {
        console.error("Error in put product: ", error.message);
        res.status(500).json({success: false, message: "Server error."});;
    }
}

export const deleteProduct = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).json({success: false, message: "Invalid product id"});
    }
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({success: true, message: "Product deleted successfully", product: deletedProduct});
    } catch (error) {
        console.error("Error in delete product: ", error.message);
        res.status(500).json({success: false, message: "Product not found."});;
    }
}