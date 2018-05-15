import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { ResumeController } from './modules/resume/resume.controller';
import { ResumeModule } from 'modules/resume/resume.module';

@Module({
  imports: [ ResumeModule ],
})
export class AppModule { }