import { Module } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { resumeProviders } from './resume.provider';
import { ResumeController } from './resume.controller';
import { DatabaseModule } from './../database/database.module';

@Module({
  imports: [ DatabaseModule ],
  components: [ ResumeService, ...resumeProviders ],
  controllers: [ ResumeController],
})
export class ResumeModule { }