import jwt from 'jsonwebtoken';

const secret = 'your_jwt_secret_key'; // Debe ser una clave secreta segura y almacenada de manera segura (por ejemplo, en variables de entorno)

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, secret, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secret);
};