require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Use environment variables
const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes (imported as needed)
const moviesRoutes = require('./routes/movies');
const recommendationsRoutes = require('./routes/recommendations');

app.use('/movies', moviesRoutes);
app.use('/recommendations', recommendationsRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
