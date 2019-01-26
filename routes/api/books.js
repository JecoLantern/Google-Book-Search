const router = require("express").Router();
const bookController = require("../../controllers/bookController");

//match to /api/books
router.route("/")
    .get(bookController.findAll)
    .post(bookController.create);

//match to /api/books/:id
router
    .route("/:id")
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.remove);

module.exports = router;