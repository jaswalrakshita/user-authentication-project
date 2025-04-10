const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// const connectDB = require('./config/db'); // optional for now
const authRoutes = require('./routes/auth');

// Load env vars
dotenv.config();

const app = express();

// DB Connection (optional)
// connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
