import express from 'express';
import cors from 'cors';
import connectDB from './config/database';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

// Configurar CORS
const corsOptions = {
  origin: 'http://tu-frontend.com',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  exposedHeaders: ['Content-Length', 'X-Kuma-Revision']
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);

connectDB();

export default app;