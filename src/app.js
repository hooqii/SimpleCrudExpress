import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';
import logger from './middleware/logger.js'; // Jika menggunakan middleware logger

const app = express();
// const cors = require('cors');

app.use(cors()); // Allow all origins

// Middleware
app.use(logger); // Jika menggunakan middleware logger
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rute
app.use('/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Hello, I am working with Supabase <3');
});

export default app;
