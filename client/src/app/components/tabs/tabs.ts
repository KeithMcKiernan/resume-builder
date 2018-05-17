import { Component, AfterContentInit, Input, ContentChildren, QueryList } from '@angular/core';
import { Tab } from './tab';

type TabPlacement = 'start' | 'center' | 'end';
type TabOrientation = 'horizontal' | 'vertical';

@Component({
  selector: 'tabs',
  exportAs: 'tabs',
  styleUrls: ['./tabs.scss'],
  template: `
    <ul class="tabs {{ orientation }} placement-{{ placement }}" [class.scrollable]="scrollable">
      <li (click)="setActiveTab(tab)" *ngFor="let tab of tabs" [class.disabled]="tab.disabled" [class.active]="tab.active">
        {{ tab.title }}
      </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class Tabs implements AfterContentInit {

  @Input('selected')
  public selected: number = 0;

  @Input('placement')
  public placement: TabPlacement = 'start';

  @Input('orientation')
  public orientation: TabOrientation = 'horizontal';

  @ContentChildren(Tab)
  public tabs: QueryList<Tab>;

  ngAfterContentInit() {
    // @todo => select tab after content is initialized.
  }

  public setActiveTab(tab: Tab) {
    this.allTabs.forEach((_tab: Tab) => _tab.active = false);
    tab.active = true;
  }

  public get allTabs(): Tab[] {
    return this.tabs.toArray();
  }

  public get activeTab(): Tab[] {
    return this.tabs.filter((tab: Tab) => tab.active);
  }

  public get disabledTabs(): Tab[] {
    return this.tabs.reduce((tabs, current, index) => {
      if (current.disabled) tabs.push(index);
      return tabs;
    }, []);
  }
}
