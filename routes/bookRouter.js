const router = require('express').Router();
const bookController = require('../controllers/bookBaseController');
const { protect } = require('../controllers/authController');


router.use(protect);

router
    .route('/books')
    .get(bookController.getAll)
    .post(bookController.createBook);

router
    .route('/books/:id')
    .get(bookController.getById)
    .put(bookController.update);

module.exports = router;