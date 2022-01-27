const mongoose = require('mongoose')

// create a schema
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,   // (String, Number, Boolean, Array)
        required : [true, "Content is required"],  // validations
        minlength: [3, "Title must be at least 3 characters"] // validations
    },
    price: {
        type: Number, 
        required : [true, "Content is required"],  // validations
        min: [0, "Price cannot be negative"] // validations
    },
    description: {
        type: String, 
        required : [true, "Content is required"],  // validations
        minlength: [5, "Description must be at least 5 characters"] // validations
    }
}, {timestamps: true})

// export
const Product = mongoose.model('Product', ProductSchema)
module.exports = Product