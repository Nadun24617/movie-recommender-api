const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');

// Get recommendations for a specific movie by ID
router.get('/:movieId', recommendationController.getRecommendations);

module.exports = router;
