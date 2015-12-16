import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'app',
    template: `<h1>Wonk</h1>`    
})

export class App {}

bootstrap(App);