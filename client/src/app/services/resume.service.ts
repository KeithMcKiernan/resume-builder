import { Injectable } from '@angular/core';
import { HttpService } from './../services/http.service';
import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class ResumeService {

  private _baseUrl = environment.apiEndpoint;

  constructor(private _http: HttpService) { }

  public getAllResumes() {
    const url = `${this._baseUrl}/resumes`;
    return this._http.get(url).pipe(map((resp: Response) => resp.json()));
  }

  public getResumeById(id: string) {
    const url = `${this._baseUrl}/resumes/${id}`;
    return this._http.get(url).pipe(map((resp: Response) => resp.json()));
  }

  public createResume(data: any) {
    const url = `${this._baseUrl}/resumes`;
    return this._http.post(url, data).pipe(map((resp: Response) => resp.json()));
  }

  public deleteResume(id: string) {
    const url = `${this._baseUrl}/resumes/${id}`;
    return this._http.delete(url).pipe(map((resp: Response) => resp.json()));
  }
}
