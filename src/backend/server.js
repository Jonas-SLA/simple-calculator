require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const apiRoutes = require('./routes/api');

const app = express();

// Warn if CORS is left open in production
if (process.env.NODE_ENV === 'production' && (!process.env.CORS_ORIGIN || process.env.CORS_ORIGIN === '*')) {
    console.warn('[Security Warning]: CORS_ORIGIN is set to "*" in production. Set it to your frontend domain in .env');
}

app.use(helmet());

app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['POST']
}));

app.use(express.json({ limit: '10kb' }));

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 60,
    message: { error: "Too many requests", message: "Please try again later." }
});
app.use('/api/', limiter);

app.use('/api', apiRoutes);

app.use((err, req, res, next) => {
    console.error(`[System Error]: ${err.stack}`);
    res.status(500).json({ error: "Internal Server Error", message: "Something went wrong." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode.`);
});
