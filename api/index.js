const express = require('express');
const { errorHandler } = require('./middleware/errorHandler');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use('/api/user', require('./routes/userRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
