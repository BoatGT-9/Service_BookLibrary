// module.exports = {
//     HOST:"localhost",
//     USER:"root",
//     PASSWORD:"",
//     DB:"Book",
// }

const Sequelize = require("sequelize");

const sequelize = new Sequelize("book", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
