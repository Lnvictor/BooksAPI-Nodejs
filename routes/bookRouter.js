const router = require('express').Router();
const bookController = require('../controllers/bookBaseController');
const { protect } = require('../controllers/authController');
const { route } = require('./authRouter');
const multer = require('multer')


router.use(protect);

router
    .route('/books')
    .get(bookController.getAll)
    .post(bookController.createBook);

router
    .route('/books/:id')
    .get(bookController.getById)
    .put(bookController.update);

router
    .route('/upload_cover/:id')
    .post(multer({ dest: './uploads' }).single("foo"), bookController.uploadImage);

router
    .route('/cover/:id')
    .get(bookController.getBookCover)


module.exports = router;
