import UserModel, { IUser } from '../models/userModel';

export const createUser = async (userData: IUser) => {
  const user = new UserModel(userData);
  return await user.save();
};

export const getAllUsers = async () => {
  return await UserModel.find();
};