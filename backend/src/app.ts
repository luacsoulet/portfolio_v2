import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import projectsRoutes from './routes/projects';
import usersRoutes from './routes/users';

const DB = process.env.MONGODB_URI?.replace('<db_password>', process.env.MONGODB_PASSWORD!);

mongoose
    .connect(DB!)
    .then(() => { console.log('Connected to MongoDB ✅'); })
    .catch((err) => { console.log(err); });

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Origin, Accept');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/api/projects', projectsRoutes);
app.use('/api/users', usersRoutes);

export default app;