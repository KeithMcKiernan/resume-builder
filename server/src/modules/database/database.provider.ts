import * as mongoose from 'mongoose';
import { DB_CONNECTION_TOKEN } from './../app.constants';
import { databaseConfig, resolveConnectionUrl } from './database.config';

export const databaseProviders = [{
  provide: DB_CONNECTION_TOKEN,
  useFactory: async (): Promise<mongoose.Connection> => {
    (mongoose as any).Promise = global.Promise;
    return await mongoose.connect(resolveConnectionUrl());
  },
}];