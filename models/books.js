'use strict';

const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const database = "postgres";
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;
const port = process.env.POSTGRES_PORT  

const sequelize = new Sequelize(database, user, password, {
        host,
        port,
        dialect: 'postgres',
        logging: false,
    }
);

const Book = sequelize.define(
    'Book', {
        name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        desc:{
            type: Sequelize.STRING,
            allowNull: false
        }, 
        genre:{
            type: Sequelize.STRING,
            allowNull: false
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false
        },

        pages: Sequelize.INTEGER,
        price:{
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        
        publishedDate: Sequelize.DATE,
        publishingCompany: {
            type: Sequelize.STRING,
            allowNull: false
        },
        registrationDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        registredBy: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }   
);

module.exports = {Book, sequelize};