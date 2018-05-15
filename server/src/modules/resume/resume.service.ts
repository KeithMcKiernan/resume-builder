import { Inject, Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { ResumeSchema } from './schemas/resume.schema';
import { IResume } from './interfaces/resume.interface';
import { Model } from 'mongoose';

@Injectable()
export class ResumeService {

  constructor(
    @Inject('ResumeModelToken')
    private readonly _resumeModel: Model<IResume>,
  ) { }

  public getAllResumes(): Promise<IResume> {
    return this._resumeModel.find().exec();
  }

  public getResumeById(_id: string): Promise<IResume> {
    return this._resumeModel.findOne({ _id }).exec();
  }

  public createResume(body: CreateResumeDto): Promise<IResume> {
    return new this._resumeModel(body).save();
  }

  public updateResume(_id: string, body: any): Promise<IResume> {
    return this._resumeModel.update({ _id }, body);
  }

  public deleteResume(_id: string): Promise<IResume> {
    return this._resumeModel.remove({ _id });
  }
}