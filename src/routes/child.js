const express = require("express");
const router = express.Router();
const { addChild } = require("../controllers/child");

router.post("/", addChild);


module.exports = router;