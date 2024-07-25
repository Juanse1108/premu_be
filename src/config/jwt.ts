import jwt from 'jsonwebtoken';

const secret = process.env.JWT_TOKEN as string;

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, secret, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secret);
};