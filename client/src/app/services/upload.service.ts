import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable()
export class UploadService {

  private _uploadQueue$: BehaviorSubject<FileQueue[]>;
  private _files: FileQueue[] = [];

  public addToQueue(files: FileQueue[]) {
    files.forEach((file: any) => {/**/}); // @todo - handle each file and push to queue
  }

  public clearQueue() {
    this._files = [];
    this._uploadQueue$.next(this._files);
  }

  private _calculateProgress(queue: any, evt: any) {
    const progress = Math.round(100 * evt.loaded / evt.total);
    queue.progress = progress;
    queue.status   = 'Progress';
    this._uploadQueue$.next(this._files);
  }
}

// @todo - move into types dir
export enum QueueStatus {
  Pending,
  Progress,
  Success,
  Error
}

// @todo - move into another directory for resuse
export type noop = () => {/**/};

// @todo - move into seperate class
export class FileQueue {

  public file: any;
  public progress: number;
  public status: QueueStatus;
  public request: Subscription;

  constructor(private _file: any) {
    this.file = _file;
    this.progress = 0;
    this.status = QueueStatus.Pending;
  }

  public upload: noop;
  public remove: noop;
  public cancel: noop;

  public isPending    = () => this.status === QueueStatus.Pending;
  public isSuccess    = () => this.status === QueueStatus.Success;
  public isError      = () => this.status === QueueStatus.Error;
  public inProgress   = () => this.status === QueueStatus.Progress;
  public isUploadable = () => this.status === QueueStatus.Pending || this.status === QueueStatus.Error;
}
