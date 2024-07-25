import { Request, Response } from 'express';
import UserModel from '../models/userModel';
import { generateToken } from '../config/jwt';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, confirmPassword, firstName, lastName, phone } = req.body;

    // Verifica si las contraseñas coinciden
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Verifica si el email ya existe
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const user = new UserModel({
      email,
      password,
      firstName,
      lastName,
      phone
    });

    await user.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Genera el token JWT
    const token = generateToken(user.id);

    // Responde con el usuario y el token
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone
      },
      token
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};