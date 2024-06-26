import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import userRoutes from './route/userRoutes.js';

dotenv.config();
// allows you to read .env variables
const port = process.env.PORT || 5000;
// defaults to port 5000 if unable to find env variables
connectDB();
// connect to the database


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', userRoutes);

app.listen(port, function(req, res){
    console.log(`Server running on port ${port}`);
});