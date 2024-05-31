import express from 'express';
import bodyParse from 'body-parser';

import dotenv from 'dotenv';
dotenv.config();

//* ROUTES
import register from './routes/register';
import auth from './routes/auth';
import profile from './controller/profile.controller';

const app = express().use(bodyParse.json());

app.use('/register', register);
app.use('/auth', auth);
app.use('/profile', profile)


const PORT = process.env.PORT || 10101;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}).on('error', (error) => {
    throw new Error(error.message);
})