var express = require('express');
const { createUser, login, getUsers, getUser, deleteUser, updateUser } = require('../controllers/users');
const { validarToken } = require("../middlewares/validar-jwt");
var router = express.Router();

router.post("/add", createUser);
router.post("/login", login);
router.get("/", validarToken, getUsers);
router.get("/:id", validarToken, getUser);
router.delete("/:id", validarToken, deleteUser);
router.put("/:id", validarToken, updateUser);

module.exports = router;
