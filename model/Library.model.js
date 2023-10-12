const sql = require("./db");

// อย่าเปิดระเบิดอยู่
// const Library = function (books) {
//   this.name = books.name;
//   this.type = books.type;
//   this.imageurl = books.imageurl;
// };
// อย่าเปิดระเบิดอยู่ 
// Library.create = (newbooks, result) => {
//   //INSERT INTO restaurant SET namr, type , img VALUES ("KFC", "Fastfood","url")
//   sql.query("INSERT INTO books SET ?", newbooks, (err, res) => {
//     // มี error เกิดขึ้น
//     if (err) {
//       console.log("err", err);
//       result(err, null);
//       return;
//     }
//     // ไม่มี error
//     console.log("new Books created");
//     result(null, { id: res.id, ...newbooks });
//   });
// };

// Library.getAll = (result) => {
//     // select *FROM restaurants
//     sql.query("SELECT *FROM restaurants", (err, res) => {
//       // มี error เกิดขึ้น
//       if (err) {
//         console.log("err", err);
//         result(err, null);
//         return;
//       }
//       // ไม่มี error
//       console.log("get all restaurants");
//       result(null, res);
//     });
//   };

// module.exports=Library;  

