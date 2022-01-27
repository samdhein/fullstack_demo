const Product = require("../models/product.model")

module.exports.index = (req, res) => {
    res.json({message: "Hello, you've reached the index"})
}

// show all products
module.exports.allProducts = (req, res) => {
    Product.find()
        .then(products=>res.json(products))
        .catch(err=> res.status(400).json(err))
}

// create product
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err=> res.status(400).json(err))
}

// show one product
module.exports.oneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err=> res.status(400).json(err))
}

// update one product
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id},  // need id
        req.body, // need body
        { new: true, runValidators: true }  // need in order to apply validations to update
        )
        .then(product => res.json(product))
        .catch(err=> res.status(400).json(err))
}

// delete one product
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err=> res.status(400).json(err))
}