var express = require('express');
const { createUser, login, getUsers } = require('../controllers/users');
var router = express.Router();

router.post("/add", createUser);
router.post("/login", login);
router.get("/", getUsers);

module.exports = router;
