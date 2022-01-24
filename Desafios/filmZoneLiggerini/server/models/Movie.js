const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    genre: {
        type: [],
        required: true,
    },
    filmZoneCategory: {
        type: [],
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    addedToCart: {
        type: Boolean,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    }
});

module.exports = model('Movie', movieSchema);