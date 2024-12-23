const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect');
const authRoutes = require('./routes/authRoutes');

dbConnect();

const app = express();

// middleware
app.use(express.json());

// Routes
app.use("/api/auth",authRoutes);

// Start the server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});