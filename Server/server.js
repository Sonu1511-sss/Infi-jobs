const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const authRoutes = require('./Routes/authRoutes');
const errorHandler = require('./Middleware/errorHandler');

dotenv.config();
connectDB();

const app = express(); 

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware should be added after the routes
app.use(errorHandler);

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = app;
