import express from 'express';
import { createFormData, getFormData } from '../controllers/formController';

const router = express.Router();

// Endpoint para recibir datos del formulario
router.post('/formdata', createFormData);
router.get('/formdata', getFormData);

export default router;