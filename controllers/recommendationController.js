const Recommendation = require('../models/Recommendation');

// Get recommendations for a specific movie
exports.getRecommendations = async (req, res) => {
    try {
        const recommendations = await Recommendation.findOne({ movie_id: req.params.movieId }).populate('similar_movies');
        if (!recommendations) return res.status(404).json({ message: 'Recommendations not found' });
        res.json(recommendations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
