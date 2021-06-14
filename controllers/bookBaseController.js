const { Book } = require('../models/books');

exports.createBook = async (req, res) => {
    let data = req.body;
	
	await Book.create({
		name: data.name,
		desc: data.desc,
		genre: data.genre,
		author: data.author,
		pages: data.pages,
		price: data.price,
		publishedDate: data.publishedDate,
		publishingCompany: data.publishingCompany,
		registrationDate: data.registrationDate,
		registredBy: data.registredBy
	});

	res.send(data);
};

exports.getById = async (req, res) => {
    const id = req.params.id;

    let data = await Book.findOne({where: {id: id}})
    res.end(data)
};

exports.update = async (req, res) => {
    let data = req.body;
	const id = req.params.id;
	
	await Book.update(data, {where: {id:id}});
	res.status = 200;
	res.end();
};

exports.delete = async (req, res) => {
    const id = req.params.id;

	await Book.destroy({
		where: {id:id}
	});
	res.status(404);
	res.end();
};

exports.getByGenre = async (req, res) =>{
    let genre = req.params.genre;
	let books = await Book.findAll(
		{where: {
			genre: genre
		}}
	);
	
	if (books.length > 0){
		res.send(books);
	}
	else{
		res.status(404);
		res.send({"message": "Genre not found..."});
	}
};

exports.getByAuthorName = async (req, res) => {
    let authorName = req.params.authorName;
	let books = await Book.findAll(
		{where: {
			author: authorName	
		}}
		);
		
	if (books.length > 0){
		res.send(books);
	}
	else{
		res.status(404);
		res.send({"message": "Author not found..."});
	}
};

exports.getAll = async (req, res) => {
    res.send(await Book.findAll({attribute: ["name", "desc", "genre", "author", "pages", "price"]}));
};