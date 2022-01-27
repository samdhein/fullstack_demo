const ProductController = require("../controllers/product.controller")

// initially comment all but the index

module.exports = app => {
    // console.log("server/routes")
    app.get("/api", ProductController.index) // root
    app.post("/api/products", ProductController.createProduct) // create a product
    app.get("/api/products", ProductController.allProducts)  // get all products
    app.get("/api/products/:id", ProductController.oneProduct) // get one product (:keyname must match req.params.keyname in controller)
    app.put("/api/products/:id", ProductController.updateProduct) // update one product
    app.delete("/api/products/:id", ProductController.deleteProduct) // delete one product
}