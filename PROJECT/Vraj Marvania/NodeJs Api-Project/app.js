var express = require('express')
const mongoose = require("mongoose");
const category = require("./controllers/category.controller");
const subcategory = require("./controllers/subcategory.controller");
const product = require("./controllers/product.controller");
const user = require("./controllers/user.controller");
const cart = require("./controllers/cart.controller");
const order = require("./controllers/order.controller");
const offer = require("./controllers/offer.controller");
const blogs = require("./controllers/blog.controller");
const review = require("./controllers/review.controller");
const search = require("./controllers/search.controller");

var cors = require('cors')
const app = express();
port = 8000
app.use(express.json());

app.use(cors())

var mongoDB = "mongodb://localhost/BoatLifeStyle";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected To MongoDB"));
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


// app.get("/", (req, res) => {
//   res.send("wellcome boat")
// });
app.use("/", user);
app.use("/category", category);
app.use("/subcategory", subcategory);
app.use("/product", product);
app.use("/cart", cart);
app.use("/order", order);
app.use("/offer", offer);
app.use("/blogs",blogs);
app.use("/review",review);
app.use("/search",search);
app.listen(port, () => { console.log(`app listening at http://localhost:${port}`) })




module.exports = db;
