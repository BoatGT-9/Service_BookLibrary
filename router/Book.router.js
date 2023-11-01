const express = require("express");
const router = express.Router();
const Book = require("../controller/Book.controller")
const {getAll} = require("../model/Book.model");

// router.get("/book",getAll)


module.exports = router;
