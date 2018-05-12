import { Schema } from 'mongoose';

export const ResumeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  created_on: {
    type: String,
    default: new Date(Date.now()).toISOString(),
  },
});