var express = require('express');
const { createUser, login } = require('../controllers/users');
var router = express.Router();

router.post("/add", createUser);
router.post("/login", login);

module.exports = router;
