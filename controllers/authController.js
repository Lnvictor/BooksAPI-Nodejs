const User = require('../models/user')

const jwt = require('jsonwebtoken');

const createToken = (id) => {
	return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: Number(process.env.JWT_EXPIRES_IN)});
};


exports.signUp = async (req, res) => {
    const data = req.body;

    let check = await User.findOne({where: {username: data.username}})

    if (check){
        res.status(500).json({error: "User already registred"}).end()
    }

    const user = await User.create({
        username: data.username,
        password: data.password,
        role: data.role
    });

    res.status(201).json(
        {
            "token": createToken(user.id),
            "username": data.username
        }
    );
};

exports.login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password){
        throw Error('missing credentials')
    }

    const user = await User.findOne({where: {username: username}})
    const pwd = user.password;

    if (!user || password != pwd){
        throw Error("Invalid Credentials")
    }

    res.send(
        {"token": createToken(user.id), "username": user.username}
    )
};