const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./router/userRoutes');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
    res.json({ error: err.message });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
