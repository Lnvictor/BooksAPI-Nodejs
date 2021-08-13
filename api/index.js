/**
 * A simple Books APIS implemented with Express and Sequelize ORM...
 * 
 * 
 * @author Victor Pereira
 * @since 2021-03-22  
 * @version 1.0
 */

const express = require('express');
const bookRouter = require('../routes/bookRouter');
const authRouter = require('../routes/authRouter');
require('dotenv').config()

const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());
app.use('/api', bookRouter)
app.use('/auth', authRouter)
app.listen(5000);
