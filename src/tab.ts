import {Component, Input} from 'angular2/core';
import {Tabs} from './tabs';

@Component({
  selector: 'tab',
  styles: [`
    .pane{
      padding: 1em;
  }`],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class Tab {
  @Input() tabTitle;
  
  constructor(tabs: Tabs) {
    tabs.addTab(this)
  }
}