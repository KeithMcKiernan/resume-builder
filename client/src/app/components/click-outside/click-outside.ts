import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutside {

  @Output('clickedOutside')
  public clickedOutside = new EventEmitter<boolean | any>();

  constructor(private _elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClickOutside(target: any) {
    const clickedInsideElement = this._elementRef.nativeElement.contains(target);
    if (!clickedInsideElement) {
      this.clickedOutside.emit(true);
    }
  }
}
