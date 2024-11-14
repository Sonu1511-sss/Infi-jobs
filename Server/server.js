const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const authRoutes = require("./Routes/authRoutes");
const path = require("path");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const _dirname = path.resolve();

// Middleware
app.use(express.json());

// Configure CORS
app.use(cors({
    origin: ["https://infinity-jobs-main-2.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true, // Fixed typo here
}));

// Routes
app.use("/api/auth", authRoutes);

// Serve static files
app.use(express.static(path.join(_dirname, "client", "dist")));

// Serve index.html for any other routes
app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
);

module.exports = app;

module.exports = app;
