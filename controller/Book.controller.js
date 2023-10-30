const Book = require("../model/Book.model");

const getAll = async (req, res) => {
  try {
    const BookList = await Book.findAll();
    const result = BookList.map((Book) => {
      return Book.toJSON();
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(err);
    res.status(500).send("Have error on Server! ");
  }
};
