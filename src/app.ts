import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {Tabs} from './tabs';
import {Tab} from './tab';

@Component({
    selector: 'app',
    template: `<tabs>
        <tab tabTitle="Foo">
            Content of tab Foo
        </tab>
        <tab tabTitle="Bar">
            Content of tab Bar
        </tab>
    </tabs>`,
    directives: [Tab, Tabs]    
})

export class App {}

bootstrap(App);