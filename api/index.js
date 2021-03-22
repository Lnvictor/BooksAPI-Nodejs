/**
 * A simple Books APIS implemented with Express and Sequelize ORM...
 * 
 * 
 * @author Victor Pereira
 * @since 2021-03-22  
 * @version 1.0
 */

const express = require('express');
const app = express();

let models = require("../models/index");
let Book = models.getModel();

app.use(express.json());
app.listen(5000);

/**
 * Retrieve all Books
 */
app.get("/books", async (req, res) => {
	let jsonif = await Book.findAll({
		attribute: ["name", "desc", "genre", "author", "pages", "price"]
	});
	
	res.send(jsonif);
});

app.get("/books/:id", async (req, res) => {
	let data = req.params.id;
	let jsonif = await Book.findOne({where: {id: data}});
	res.send(jsonif);
});

/**
 * Create books
 */
app.post("/books", (req, res) => {
	let data = req.body;
	
	Book.create({
		name: data.name,
		desc: data.desc,
		genre: data.genre,
		author: data.author,
		pages: data.pages,
		price: data.price
	});

	Book.sync();
	res.send(data)
});

/**
 * Updating books by id
 */
app.put("/books/:id", async (req, res) => {
	let data = req.body
	const id = req.params.id
	
	await Book.update(data, {where: {id:id}});
	res.status = 200;
	res.end();
});

/**
 * Delete books by id 
 */
app.delete("/books/:id", async (req, res) => {
	const id = req.params.id;

	await Book.destroy({
		where: {id:id}
	});
	res.status(404);
	res.end()
});	