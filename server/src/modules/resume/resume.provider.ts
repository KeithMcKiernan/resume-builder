import { Connection } from 'mongoose';
import { ResumeSchema } from './schemas/resume.schema';

export const resumeProviders = [{
  provide: 'ResumeModelToken',
  useFactory: (connection: Connection) => {
    return connection.model('Resumes', ResumeSchema);
  },
  inject: ['DbConnectionToken'],
}];