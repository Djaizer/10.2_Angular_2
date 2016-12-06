import {Component} from "angular2/core";
import {UserService} from "./user.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {ROUTER_PROVIDERS} from "angular2/src/router/router_providers";
import {AppComponent1} from "./app1.component";
import {Router} from "angular2/src/router/router";
/**
 * Created by MyHomePC2 on 11.11.2016.
 */

@Component({
        template: `
<h1>Users</h1>
<p>
<a class="btn btn-primary" [routerLink]="['NewUser']">Add User</a>
</p>
<table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody *ngFor="#user of users">
      <tr>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>
        <a [routerLink]="['EditUser', {id: user.id}]" >
        <i class="glyphicon glyphicon-edit"></i>
        </a></td>
        <td>
        <a [routerLink]="['Users']" (click)="removeUser(user)"  >
        <i class="glyphicon glyphicon-remove"></i></a> 
        </td>        
      </tr>   
    </tbody>
  </table>
`,
        directives: [ROUTER_DIRECTIVES],
        providers: [UserService, HTTP_PROVIDERS]
    }
)
export class UsersComponent implements OnInit {
    users: any [] = [];

    constructor(private _usersJson: UserService) {

    }

    ngOnInit(): any {
        return this._usersJson.getUsers().subscribe(posts => this.users = posts);
    }

    removeUser(user?) {
        if(confirm("Are you sure to remove " + user.name + "?")) {
            this.users.splice(this.users.indexOf(user), 1);
            this._usersJson.removeUser(user.id).subscribe(res => console.log(res.name + "Is deleted"));
        }
    }

}