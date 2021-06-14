const { login, signUp } = require('../controllers/authController');

const router = require('express').Router()

router.route('/login')
    .post(login);

router.route('/signup')
    .post(signUp);


module.exports = router;