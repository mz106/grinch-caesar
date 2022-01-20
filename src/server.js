
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const connection = require("./db/connection");
const childRouter = require("./routes/child");
const app = express();



app.use(express.json());
app.use(cors());
app.use(childRouter);

app.listen(5000, () => {
    console.log("App is listening on port 80");
});