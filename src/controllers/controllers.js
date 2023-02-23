import mongoose from 'mongoose';
import { ProductSchema } from "../models/models.js";

const Product = mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {
    console.log('addnewProduct: ' + req.body.toString());
    let newProduct = new Product(req.body);
    newProduct.save((err, Product) => {
        if (err) {
            console.log('addnewProduct ERR: ' + err);
            res.send(err);
        }
        res.json(Product);
    });
}

export const getProducts = (req, res) => {
    console.log('getProducts: -----');
    Product.find({}, (err, Product) => {
        if (err) {
            console.log('getProducts ERR: ' + err);
            res.send(err);
        }
        res.json(Product);
    }); 
}

export const getProductWithID = (req, res) => {
    console.log('getProductWithID: ' + req.params.ProductID);
    Product.findById(req.params.ProductID, (err, Product) => {
        if (err) {
            console.log('getProductWithID ERR: ' + err);
            res.send(err);
        }
        res.json(Product);
    });
}

export const updateProduct = (req, res) => {
    console.log('updateProduct: ' + req.params.ProductID);
    console.log('     --> ' + req.body);
    Product.findOneAndUpdate({ _id: req.params.ProductID }, req.body, { new: true, useFindAndModify: false }, (err, Product) => {
        console.log('updateProduct ERR: ' + err);
        if (err) {
            res.send(err);
        }
        res.json(Product);
    });
}

export const deleteProduct = (req, res) => {
    console.log('deleteProduct: ' + req.params.ProductID);
    Product.deleteOne({ _id: req.params.ProductID}, (err, Product) => {
        console.log('deleteProduct ERR: ' + err);
        if (err) {
            res.send(err);
        }
        res.json({ message: 'successfully deleted product' });
    });
}
