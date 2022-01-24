const mongoose = require("mongoose");

const dbMongo = 'mongodb+srv://leoligge:35418660@backvideoclub.rxvl4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const dbconnect = async () => {
    try {
        mongoose.connect(dbMongo, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(db => console.log('Database is connected'))
            .catch(err => console.log(err))
    } catch (e) {
        console.log(e);
        throw new Error("Error de conección a la base de datos");
    }
}

module.exports = { dbconnect };