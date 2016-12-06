import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {NgProjectComponent} from "./ng-project.component";
import {UsersComponent} from "./users.component";
import {PostsComponent} from "./posts.component";
import {AddUserComponent} from "./add-user.component";
import {OnDeactivate} from "angular2/src/router/interfaces";
import {ComponentInstruction} from "angular2/src/router/instruction";
import {NotFoundComponent} from "./not-found.component";

@RouteConfig([
        {path: '/', component: NgProjectComponent, name: 'Home', useAsDefault: true},
        {path: '/users', component: UsersComponent, name: 'Users'},
        {path: '/users/new', component: AddUserComponent, name: 'NewUser'},
        {path: '/users/edit/:id', component: AddUserComponent, name: 'EditUser'},
        {path: '/users/edit/notFound', component: NotFoundComponent, name: 'NotFound'},
        {path: '/posts', component: PostsComponent, name: 'Posts'},
        {path: '/**', redirectTo: ['Home'], name: 'Other'},

    ]
)
@Component({
    selector: 'my-app1',
    templateUrl: '/app/app1.component.html',
    directives: [ROUTER_DIRECTIVES],

})
export class AppComponent1 {
    constructor(private router: Router) {
    }

    isRouteActive(instruction: any []): boolean {
        return this.router.isRouteActive(this.router.generate(instruction));

    }

}