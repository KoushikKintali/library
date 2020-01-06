const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const db = mongoose.connect("mongodb://localhost/bookAPI");

const port = process.env.PORT || 3000;

const Book = require("./models/bookModel");

const bookRouter = require("./routes/bookRouter")(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", bookRouter);

app.get("/", function(req, res) {
  res.send("Hello from my library app");
});

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
