const express = require('express');
require('dotenv').config();
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const filterRoutes = require('./routes/filter');
const stripeRoutes = require('./routes/stripe');

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/api/filter', filterRoutes);
app.use('/uploads', express.static('uploads'));
app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(_dirname, '../client', 'build', 'index.html'));
});
app.post('/create-checkout-session', stripeRoutes);

connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
