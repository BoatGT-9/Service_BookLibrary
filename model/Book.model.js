const { DataTypes, STRING } = require("sequelize");
const sequelize = require("./db");
// Defind thr restaurant model

const Book = sequelize.define("book", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Publisher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Book;
