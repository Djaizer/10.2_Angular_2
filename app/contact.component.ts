import {Component} from 'angular2/core';
import {CanDeactivate} from "angular2/src/router/interfaces";
import {ComponentInstruction} from "angular2/src/router/instruction";
import {Route} from "angular2/src/router/route_config_impl";
import {Router} from "angular2/src/router/router";

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
    constructor(private _router: Router){}

    onSubmit(form){
        console.log(form);
        this._router.navigate(['Albums']);

    }
    routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any {
        return confirm("Are you sure?");
    }
}