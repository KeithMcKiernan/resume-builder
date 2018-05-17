import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  public get(url: string) {
    const headers = new HttpHeaders();
    return this._http.get(url, { headers });
  }

  public post(url: string, data: string) {
    const headers = new HttpHeaders();
    return this._http.post(url, data, { headers });
  }

  public put(url: string, data: any) {
    const headers = new HttpHeaders();
    return this._http.put(url, data, { headers });
  }

  public patch(url: string, data: any) {
    const headers = new HttpHeaders();
    return this._http.patch(url, data, { headers });
  }

  public delete(url: string) {
    const headers = new HttpHeaders();
    return this._http.delete(url, { headers });
  }
}
