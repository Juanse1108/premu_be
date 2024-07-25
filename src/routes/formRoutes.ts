import express from 'express';
import { createFormData } from '../controllers/formController';

const router = express.Router();

// Endpoint para recibir datos del formulario
router.post('/formdata', createFormData);

export default router;