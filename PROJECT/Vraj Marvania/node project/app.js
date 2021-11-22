var express = require('express')
const mongoose = require("mongoose");
const category = require("./controllers/category.controller");
const subcategory = require("./controllers/subcategory.controller");
const product = require("./controllers/product.controller");
const auth = require("./controllers/user.controller");
const cart = require("./controllers/cart.controller");
const order = require("./controllers/order.controller");


const app = express();
port = 8000
app.use(express.json());

var mongoDB = "mongodb://localhost/BoatLifeStyle";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected To MongoDB"));
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


// app.get("/", (req, res) => {
//   res.send("wellcome boat")
// });

app.use("/category", category);
app.use("/subcategory", subcategory);
app.use("/product", product);
app.use("/", auth);
app.use("/cart", cart);
app.use("/order", order);

app.listen(port, () => { console.log(`app listening at http://localhost:${port}`) })


