import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from './tabs';
import { Tab } from './tab';

const Components = [ Tabs, Tab ];

@NgModule({
  imports: [ CommonModule ],
  exports: [ ...Components ],
  declarations: [ ...Components ]
})
export class TabsModule { }
