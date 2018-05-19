import { Directive, ElementRef, } from '@angular/core';

@Directive({
  selector: '[replaceHost]'
})
export class ReplaceHost {

  constructor(private readonly _elementRef: ElementRef) { }

  public replaceHostElement() {
    const nativeElement = this._elementRef.nativeElement;
    const nodeToReplace = nativeElement.parentNode;
    const parentNode    = nativeElement.parentElement.parentNode;
    parentNode.replaceChild(nativeElement, nodeToReplace);
  }
}
