import { Schema } from 'mongoose';

export const UserSchema: Schema = new Schema({
  local: {
    email: {
      type: String,
      lowercase: true,
      unique: true,
      sparse: true,
    },
    salt: String,
    hashPassword: String,
  },
});