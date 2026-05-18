import Product from "../models/product.model.js";
import mongoose from "mongoose";


export const getProducts =  async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch (error) {
        console.log('Error fetching Products:', error.message);
        res.status(500).json({success: false, message: 'Error fetching Products'});
    }
};

export const createProduct = async (req, res) => {
    const product = req.body;
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: 'Please fill the empty fields'});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) { 
        console.log('Error creating Product:', error.message);
        res.status(500).json({success: false, message: 'Error creating Product'});
    }
};

export const updateProduct = async (req,res) => {
    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success: false, message: 'Invalid Product ID'});
    };
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, data: updatedProduct});
    } catch (error) {
        console.log('Error updating Product:', error.message);
        res.status(500).json({success: false, message: 'Error updating Product'});
    }
};


export const deleteProduct = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success: false, message: 'Invalid Product ID'});
    };
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: 'Product deleted successfully'});
    } catch (error) {
        console.log('Error deleting Product:', error.message);
        res.status(500).json({success: false, message: 'Server Error'});
    }
};