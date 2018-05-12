import { Test } from '@nestjs/testing';
import { ResumeService } from './resume.service';
import { resumeProviders } from './resume.provider';
import { ResumeController } from './resume.controller';
import { DatabaseModule } from './../../database/database.module';

describe('ResumeController', () => {

  let resumeService: ResumeService;
  let resumeController: ResumeController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [ DatabaseModule ],
      components: [ ResumeService, ...resumeProviders ],
      controllers: [ ResumeController],
    }).compile();
    resumeService = module.get<ResumeService>(ResumeService);
    resumeController = module.get<ResumeController>(ResumeController);
  });

  describe('getAllResumes', () => {
    it('should return an array of resumes', async () => {
      const result = ['test'];
      jest.spyOn(resumeService, 'getAllResumes').mockImplementation(() => result);
      console.log(await resumeController.getAllResumes());
      // expect(await resumeController.getAllResumes()).toBe(result);
    });
  });
});