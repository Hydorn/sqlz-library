import { Sequelize } from "sequelize-typescript";
import Author from "./author";
import Book from "./book";
const config = require("../config/config.js");

const sequelize = new Sequelize({
    database: config.development.database,
    dialect: 'mysql',
    username: config.development.username,
    password: config.development.password,
    models: [Author,Book], // or [Player, Team],
  });


/*
const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,{
        host:"localhost",
        dialect:"mysql"
    }
);
*/

export default sequelize;