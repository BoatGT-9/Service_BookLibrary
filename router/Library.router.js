const express = require("express");
const router = express.Router();
const Library = require("../model/Library.model");
// อย่าเปิดระเบิดอยู่
// router.post("/books", (req, res) => {
//   const library = new books({
//     name: req.body.name,
//     type: req.body.type,
//     imageURL: req.body.imageURL,
//   });
//   // insert to DB
//   Library.create(library, (err, data) => {
//     if (err) {
//       res.status(500).send({
//         messange:
//           err.messange ||
//           "Som error occured while inserting the new restaurant",
//       });
//     } else {
//       res.send(data);
//     }
//   });
// });

// router.get("/books", (res, req) => {
//   Library.getall((err, data) => {
//     if (err) {
//       res.status(500).send({ message: err.message || "Som error Library " });
//     }else {
//         res.send(data);
//     }
//   });
// });

module.exports = router;
