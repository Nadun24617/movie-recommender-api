const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Get all movies
router.get('/', movieController.getAllMovies);

// Add a new movie
router.post('/', movieController.addMovie);

// Get a specific movie by ID
router.get('/:id', movieController.getMovieById);

// Update a movie by ID
router.put('/:id', movieController.updateMovie);

// Delete a movie by ID
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
