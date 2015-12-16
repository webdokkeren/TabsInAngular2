import { Component } from 'angular2/core';
import {Tab} from './tab';

@Component({
  selector: 'tabs',  
  template: `
    <ul>
      <li *ngFor="#tab of tabs" (click)="selectTab(tab)">
        {{tab.tabTitle}}
      </li>
    </ul>
    <ng-content></ng-content>
  `
})

export class Tabs {
  tabs: Tab[] = [];
  
  selectTab(tab:Tab) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true
  }
  
  addTab(tab:Tab) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
  
}