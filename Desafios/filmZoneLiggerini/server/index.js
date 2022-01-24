const express = require('express');
const { dbconnect } = require('./db/config');
const cors = require("cors");

const PORT = 3000;
const HOSTNAME = 'localhost';

const app = express();

app.use(cors());

app.set('port', PORT);

app.use(express.json());

dbconnect();

app.use("/api/movies", require("./routes/movies"));
app.use("/api/users", require("./routes/users"));
app.use("/api/cart", require("./routes/cart"));

app.listen(app.get('port'), () => {
    console.log('Server on http://' + HOSTNAME + ':' + PORT);
});

