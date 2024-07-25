import mongoose, { Document, Schema } from 'mongoose';

export interface IRegistration extends Document {
  firstName: string;
  lastName: string;
  identification: string;
  idType: string;
  department: string;
  city: string;
  address: string;
  phone: string;
  comments: string;
  incidentDate: Date;
}

const RegistrationSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  identification: { type: String, required: true },
  idType: { type: String, required: true },
  department: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  comments: { type: String },
  incidentDate: { type: Date, required: true }
});

const RegistrationModel = mongoose.model<IRegistration>('Registration', RegistrationSchema);

export default RegistrationModel;