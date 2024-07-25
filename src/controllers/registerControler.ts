import { Request, Response } from 'express';
import RegisterModel from '../models/registerModel';

export const register = async (req: Request, res: Response) => {
  try {
    const registration = new RegisterModel(req.body);
    await registration.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};