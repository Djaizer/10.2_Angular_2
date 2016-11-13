import {Component} from "angular2/core";
import {UserService} from "./user.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {OnInit} from "angular2/src/core/linker/interfaces";
/**
 * Created by MyHomePC2 on 11.11.2016.
 */

@Component({
        template: `
<h1>Users</h1>
<p>
<a class="btn btn-primary" href="/users/new">Add User</a>
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
        <td><i class="glyphicon glyphicon-edit"></i></td>
        <td><i class="glyphicon glyphicon-remove"></i></td>
      </tr>   
    </tbody>
  </table>
`,
providers: [UserService, HTTP_PROVIDERS]
    }
)
export class UsersComponent implements OnInit {
    users: any [] = [];
    constructor(private _usersJson: UserService) {
    }

    ngOnInit(): any {
        return  this._usersJson.getUsers().subscribe(posts => this.users = posts);
    }



}