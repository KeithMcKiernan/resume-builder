import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[connectForm]'
})
export class ConnectForm {

  @Input('connectForm')
  public set data(value: any) {
    if (!!value) {
      this._formGroupDirective.form.patchValue(value);
      this._formGroupDirective.form.markAsPristine();
    }
  }

  constructor(private readonly _formGroupDirective: FormGroupDirective) { }
}
