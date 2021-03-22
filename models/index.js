let getModel = () => {
    const Sequelize = require('sequelize');
    const database = "postgres";
    const user = "usr";
    const password = "pwd";
    const host = "localhost";
    const port = 5432;    

    const sequelize = new Sequelize(database, user, password, {
            host,
            port,
            dialect: 'postgres',
            logging: false,
        }
    );

    let Book = sequelize.define(
        'book', {
            name: Sequelize.STRING,
            desc: Sequelize.STRING,
            genre: Sequelize.STRING,
            author: Sequelize.STRING,
            pages: Sequelize.INTEGER,
            price: Sequelize.DECIMAL
        }
    );
    Book.sync();

    return Book;
};  

module.exports = {getModel};