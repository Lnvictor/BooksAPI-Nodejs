const { User } = require('../models')

const { promisify } = require("util");
const jwt = require('jsonwebtoken');

exports.createToken = (id) => {
	return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: Number(process.env.JWT_EXPIRES_IN)});
};

exports.verifyToken = (req) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }
    return token ? true: false;
}

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

exports.protect = async (req, res, next) => {
    try{
        if (!this.verifyToken(req)) {
            res.status(401)
                .json({err: "You are not logged in! Please login in to continue"})
        }
    
        const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    
        const user = await User.findOne({where: {id: decode.id}});
        if (!user) {
            res.status(403).json({err: "User no longer avaliable"})
        }
    
        req.user = user;
        next();
    }
    catch (err){
        next(err);
    }
  };