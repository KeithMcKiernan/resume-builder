import { RequestMapping, RequestMethod, Request, Response } from '@nestjs/common';
import { Body, Controller, UseGuards, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './../../common/interceptors';
import { Roles } from './../../common/decorators/roles.decorator';
import { RolesGuard } from './../../common/guards/roles.guard';
import { ResumeService } from './resume.service';

@Controller('api/resumes')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class ResumeController {

  constructor(private readonly _resumeService: ResumeService) { }

  @RequestMapping({ method: RequestMethod.GET })
  public async getAllResumes(@Response() res?: any) {
    const message = await this._resumeService.getAllResumes();
    res.status(200).json(message);
  }

  @RequestMapping({ method: RequestMethod.GET, path: '/:id' })
  public async getResumeById(@Request() req, @Response() res) {
    const id = req.params.id;
    const message = await this._resumeService.getResumeById(id);
    res.status(200).json(message);
  }

  @Roles('admin')
  @RequestMapping({ method: RequestMethod.POST })
  public async createResume(@Response() res, @Body() body) {
    const message = await this._resumeService.createResume(body);
    res.status(201).json({ message: 'Successfully created new resume!!' });
  }

  @RequestMapping({ method: RequestMethod.PUT, path: '/:id' })
  public async updateResume(@Request() req, @Response() res, @Body() body) {
    const { id } = req.params;
    const message = await this._resumeService.updateResume(id, body);
    res.status(200).json({ message: 'Successfully updated resume!!' });
  }

  @Roles('admin')
  @RequestMapping({ method: RequestMethod.DELETE, path: '/:id' })
  public async deleteResume(@Request() req, @Response() res) {
    const { id } = req.params;
    const message = await this._resumeService.deleteResume(id);
    res.status(204).json({ message: 'Successfully deleted resume!!' });
  }
}