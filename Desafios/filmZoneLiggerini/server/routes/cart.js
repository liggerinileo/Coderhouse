const { Router } = require("express");
const { getMovies, updateMovie, deleteMovie, add } = require("../controllers/cart");

const router = Router();

router.get("/", getMovies);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);
router.post("/add", add);

module.exports = router;