const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title cannot be blank"],
        minlength: [2, "title cannot be less than 2 characters"],
    },
    price: {
        type: Number,
        required: [true, "price cannot be blank"]
    },
    description: {
        type: String,
        required: [true, "description cannot be blank"]
    },
},
    { timestamps: true }
);

const Products = mongoose.model('products', ProductsSchema);

module.exports = Products;
