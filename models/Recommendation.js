const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
    movie_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    similar_movies: { type: [mongoose.Schema.Types.ObjectId], ref: 'Movie' }
});

module.exports = mongoose.model('Recommendation', RecommendationSchema);
