const mysql = require("mysql");
const dbconfig = require("../config/db.config");

const connection = mysql.createConnection({
  host: dbconfig.HOST,
  user: dbconfig.USER,
  password: dbconfig.PASSWORD,
  db: dbconfig.DB,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("เชื่อมต่อกับ Database เรียบร้อยแล้ว");
});

module.exports=connection; 