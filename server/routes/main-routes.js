const router = require("express").Router();
const {
  getBooks,
  setBooks,
  deleteBooks,
  updateBooks,
} = require("../controller/main-controller");

router.get("/get", getBooks);
router.post("/set", setBooks);
router.delete("/delete/:id", deleteBooks);
router.put("/update/:id", updateBooks);

module.exports = router;
