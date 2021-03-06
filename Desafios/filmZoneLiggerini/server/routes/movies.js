const { Router } = require("express");
const { check } = require("express-validator");
const { validarToken } = require("../middlewares/validar-jwt");

const { getMovies, getMovie, updateMovie, add, deleteMovie } = require("../controllers/movies");

const router = Router();

const checkValidation = [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("description", "La sinopsis es obligatoria").not().isEmpty(),
    check("year", "El año es obligatorio").not().isEmpty(),
    check("duration", "La duración es obligatoria").not().isEmpty(),
    check("price", "El precio es obligatorio").not().isEmpty(),
    check("genre", "El genero es obligatorio").not().isEmpty()
  ];

router.get("/", getMovies);
router.get("/:id", getMovie);
router.put("/:id", [checkValidation, validarToken], updateMovie);
router.post("/add", validarToken, add);
router.delete("/:id", validarToken, deleteMovie);

module.exports = router;