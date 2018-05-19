import { Component, Input, OnInit } from '@angular/core';
import { IToast, ToastType, ToastPosition } from './toast.model';
import { ToastService } from './toast.service';

@Component({
  selector: 'toast',
  styleUrls: ['./toast.scss'],
  template: `
    <div *ngFor="let toast of toasts" class="toast {{ getClasses(toast) }}">
      {{ toast.message }} <a class="close" (click)="dismiss(toast)">&times;</a>
    </div>
  `
})
export class Toast implements OnInit {

  public toasts: IToast[] = [];

  @Input('id')
  public id: string;

  constructor(private readonly _toastService: ToastService) { }

  ngOnInit() {
    this._toastService.getToast()
      .subscribe((toast: IToast) => {
        if (!toast) {
          this.toasts = [];
          return;
        }
        console.log(toast);
        this.toasts.push(toast);
      });
  }

  public getClasses(toast: IToast) {
    if (!toast) return;
    switch (toast.type) {
      case ToastType.Success: {
        return 'toast-success';
      }
      case ToastType.Info: {
        return 'toast-info';
      }
      case ToastType.Warning: {
        return 'toast-warning';
      }
      case ToastType.Error: {
        return 'toast-error';
      }
    }
  }

  public dismiss(toast: IToast) {
    this.toasts = this.toasts.filter(_toast => _toast !== toast);
  }
}
