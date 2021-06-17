'use strict';

module.exports = (sequelize, DataTypes)  => {
    const Book = sequelize.define(
        'Book', {
            name:{
                type: DataTypes.STRING,
                allowNull: false
            },
            desc:{
                type: DataTypes.STRING,
                allowNull: false
            }, 
            genre:{
                type: DataTypes.STRING,
                allowNull: false
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false
            },

            pages: DataTypes.INTEGER,
            price:{
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            
            publishedDate: DataTypes.DATE,
            publishingCompany: {
                type: DataTypes.STRING,
                allowNull: false
            },
            registrationDate: {
                type: DataTypes.DATE,
                allowNull: false
            },
            registredBy: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }   
    );

    return Book;
};