export type ToastPosition =
    'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export enum ToastType {
  Success,
  Error,
  Info,
  Warning
}

export interface IToast {
  id: string;
  type: ToastType;
  message: string;
}
