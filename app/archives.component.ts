import {Component} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    template: `
        <h1>Archives</h1>
       <a [routerLink]="['Home']">{{ year }} / {{ month }} </a> 
    `,
    directives:[ROUTER_DIRECTIVES]
})
export class ArchivesComponent {
    year: number;
    month: number;

    constructor(private _routeParams: RouteParams) {
        this.year = parseInt(_routeParams.get("year"));
        this.month = parseInt(_routeParams.get("month"));
    }
}