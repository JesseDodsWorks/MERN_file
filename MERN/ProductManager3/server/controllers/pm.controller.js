const Products = require('../models/pm.model.js');

/////////////////////// Find ALL /////////////////////////
module.exports.findAllProducts = (req, res) => {
    Products.find()
        .then((allProducts) => {
            res.json( allProducts )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

/////////////////////// Find ALL /////////////////////////

/////////////////////// Find ONE /////////////////////////
module.exports.findOneProduct = (req, res) => {
    Products.findOne({ _id: req.params.id })
        .then(oneProduct => {
            res.json( oneProduct )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

/////////////////////// Find ONE /////////////////////////

/////////////////////// CREATE one /////////////////////////
module.exports.createNewProduct = (req, res) => {
    Products.create(req.body)
        .then(newProduct => {
            res.json( newProduct )
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
        
/////////////////////// CREATE one /////////////////////////

/////////////////////// Update one /////////////////////////
module.exports.updateProduct = (req, res) => {
    Products.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json( updatedProduct )
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}

/////////////////////// Update one /////////////////////////

/////////////////////// Delete one /////////////////////////
module.exports.deleteProduct = (req, res) => {
    Products.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json( result )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

/////////////////////// Delete one /////////////////////////