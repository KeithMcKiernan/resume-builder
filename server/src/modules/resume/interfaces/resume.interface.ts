import { Document } from 'mongoose';

export interface IResume extends Document {
  name?: string;
  description?: string;
}