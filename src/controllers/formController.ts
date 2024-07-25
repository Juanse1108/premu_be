import { Request, Response } from 'express';
import FormData from '../models/formData';

// Función para manejar la creación de datos del formulario
export const createFormData = async (req: Request, res: Response) => {
    try {
        const formData = new FormData(req.body);
        await formData.save();
        res.status(201).json({ message: 'Form data saved successfully', formData });
    } catch (error) {
        res.status(400).json({ message: 'Error saving form data', error });
    }
};
