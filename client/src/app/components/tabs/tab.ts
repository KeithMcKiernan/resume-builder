import { Component, Input } from '@angular/core';
import { Tabs } from './tabs';

@Component({
  selector: 'tab',
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `
})
export class Tab {

  @Input('title')
  public title: string;

  @Input('active')
  public active: boolean = false;

  @Input('disabled')
  public disabled: boolean = false;
}
