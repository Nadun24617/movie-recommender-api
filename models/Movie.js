const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    release_year: { type: Number, required: true },
    director: { type: String },
    actors: { type: String },
    language: { type: String },
    duration: { type: Number },
    rating: { type: Number },
    mood: { type: String, required: true }
});

module.exports = mongoose.model('Movie', MovieSchema);
