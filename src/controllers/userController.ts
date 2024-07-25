import { Request, Response } from 'express';
import { createUser, getAllUsers } from '../repositories/userRepository';
import UserModel from '../models/userModel';

export const addUser = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error });
  }
};


export const listUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find().select('-password'); // Excluye el campo de la contraseña
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};