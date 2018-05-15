import { createHmac, randomBytes } from 'crypto';

export const generateSalt = () => {
  return randomBytes(128).toString();
};

export const generateHashPassword = (salt: string, password: string) => {
  return createHmac('sha256', salt).update(password).digest('hex');
};