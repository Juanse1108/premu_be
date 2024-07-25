import express from 'express';
import userRoutes from './routes/userRoutes';
import connectDB from './config/database';
import authRoutes from './routes/authRoutes';
import registrationRoutes from './routes/registerRoutes';

const app = express();

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/auth', authRoutes);

connectDB();

export default app;