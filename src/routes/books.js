const router = require("express").Router();
const {
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");



router.get("/books", getBooks);
router.post("/books", createBook);
router.get("/books/:book_id", getBook);
router.patch("/books/:book_id", updateBook);
router.delete("/books/:book_id", deleteBook);

module.exports = router;
