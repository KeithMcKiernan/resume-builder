import { Connection } from 'mongoose';
import { DB_CONNECTION_TOKEN, RESUME_MODEL_TOKEN } from './../../app.constants';
import { ResumeSchema } from './schemas/resume.schema';

export const resumeProviders = [{
  provide: RESUME_MODEL_TOKEN,
  useFactory: (connection: Connection) => connection.model('Resume', ResumeSchema),
  inject: [ DB_CONNECTION_TOKEN ],
}];