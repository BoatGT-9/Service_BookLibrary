const Book = require("../model/Book.model");

const getAll = async (req, res) => {
  try {
    const BookList = await Book.findAll();
    console.log("Get books all ",BookList);
    res.status(200).json({result});
  } catch (err) {
    console.log(err);
    res.status(500).send("Have error on Server! ");
  }
};




module.exports = { getAll };