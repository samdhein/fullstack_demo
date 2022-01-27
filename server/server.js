// import dependencies 
const express = require("express");
const app = express();
const cors = require('cors');

// configure mongoose (set up in config and require). Should be able to see "established a connection to the database" in CL
require('./config/mongoose.config')

// configure express, cors
app.use(cors()) // 2 localhost ports to communicate
app.use(express.json(), express.urlencoded({ extended: true })) // POST method

// routes
// comment out routes until they're set up in order to start server
console.log("server.js: before routes")
require("./routes/product.routes")(app);  // rename

// listen to port 
const port = 8000;
app.listen(port, ()=> console.log(`listening on port: ${port}`))

// conclusion:
    // get server and config working... "established a connection to the database" in terminal. comment out routes setup until they're ready.
    // set up model
    // set up controller, routes
    // 