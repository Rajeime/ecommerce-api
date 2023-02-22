const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("../routes/users");
// const error = require('./utils/erroHandler');
const cors = require("cors");
const config = require("../config/config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

//<------- Mongodb connection ------->
mongoose.set("strictQuery", false);
mongoose.connect(config.db.uri, { useNewUrlParser: true }, (err) => {
  if (err) throw err;
  console.log("MongoDB Connected");
});

module.exports = {
  app,
};
