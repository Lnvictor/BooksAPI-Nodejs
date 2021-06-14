/**
 * A simple Books APIS implemented with Express and Sequelize ORM...
 * 
 * 
 * @author Victor Pereira
 * @since 2021-03-22  
 * @version 1.0
 */

const express = require('express');
const BookRouter = require('../routes/BookRouter');

const app = express();

const { Book } = require('../models/books')

app.use(express.json());
app.use('/api/', BookRouter)
app.listen(5000);