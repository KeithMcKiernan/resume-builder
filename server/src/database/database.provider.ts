import * as mongoose from 'mongoose';
import { databaseConfig, resolveConnectionUrl } from './database.config';

export const databaseProviders = [{
  provide: 'DbConnectionToken',
  useFactory: async (): Promise<mongoose.Connection> => {
    (mongoose as any).Promise = global.Promise;
    return await mongoose.connect(resolveConnectionUrl());
  },
}];