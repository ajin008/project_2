require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const UserRoutes = require("./routes/UserRoutes");
const AdminRoutes = require("./routes/AdminRoutes");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//view engine and views directory
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const port = process.env.port;

app.use(UserRoutes);

app.listen(port, () => {
  console.log(`server is running ar ${port}`);
  console.log("http://localhost:3000/landingpage");
});
