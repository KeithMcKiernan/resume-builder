import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { ToastType, IToast } from './toast.model';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class ToastService {

  private _toastMessage$ = new Subject<IToast>();
  private _showOnRouteChange: boolean = false;

  constructor(
    private readonly _router: Router,
  ) {
    this._subscribeToRouteEvents();
  }

  private _subscribeToRouteEvents() {
    this._router.events.subscribe((evt) => {
      if (evt instanceof NavigationStart) {
        this._showOnRouteChange ? this._showOnRouteChange = false : this.dismissAll();
      }
    });
  }

  public getToast(id?: string): Observable<IToast> {
    return this._toastMessage$.asObservable().pipe(
      filter((toast: IToast) => toast && toast.id === id)
    );
  }

  public show(type: ToastType, message: string, showOnRouteChange = false) {
    this._showOnRouteChange = showOnRouteChange;
    this._toastMessage$.next(<IToast>{ type: type, message: message });
  }

  public success(message: string, showOnRouteChange = false) {
    this.show(ToastType.Success, message, showOnRouteChange);
  }

  public info(message: string, showOnRouteChange = false) {
    this.show(ToastType.Info, message, showOnRouteChange);
  }

  public warn(message: string, showOnRouteChange = false) {
    this.show(ToastType.Warning, message, showOnRouteChange);
  }

  public error(message: string, showOnRouteChange = false) {
    this.show(ToastType.Error, message, showOnRouteChange);
  }

  public dismissAll() {
    this._toastMessage$.next();
  }
}
