const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const authRoutes = require('./Routes/authRoutes');
const path = require('path');

// Environment variables load karo
dotenv.config();

// MongoDB connect karo
connectDB();

const app = express();
const _dirname = path.resolve();

// Middleware use karo
app.use(express.json());
app.use(cors()); // Allow karo Cross-Origin requests

// Routes set karo
app.use('/api/auth', authRoutes);

// app.use(cors({
//     origin: ["https://infinity-jobs-main-2.vercel.app"],
//     methods: ["POST", "GET"],
//     credentials: true, // Fixed typo here
// }));

// Static files serve karo
app.use(express.static(path.join(_dirname, 'client/dist')));

// Client ki main index.html serve karo
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, 'client', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server http://localhost:${PORT} par chal raha hai`));

module.exports = app;