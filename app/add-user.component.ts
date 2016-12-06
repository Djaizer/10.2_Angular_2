import {Component} from "angular2/src/core/metadata";
import {ControlGroup} from "angular2/src/common/forms/model";
import {FormBuilder} from "angular2/src/common/forms/form_builder";
import {Validators} from "angular2/src/common/forms/validators";
import {CustomValidators} from "./custom-validators.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {CanDeactivate} from "angular2/src/router/interfaces";
import {ComponentInstruction, RouteParams} from "angular2/src/router/instruction";
import {Router} from "angular2/src/router/router";
import {UserService} from "./user.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {User} from "./user.object";


/**
 * Created by MyHomePC2 on 12.11.2016.
 */

@Component({
        template: `
 <h2>{{title}}</h2>
<form [ngFormModel]="form" (ngSubmit)="onClick()" >

<fildset>
<legend>User</legend>
</fildset>
<div class="form-group">
<label class="req" for="name">Name</label>
<input [(ngModel)]="user.name" #name="ngForm" ngControl="name" type="text" id="name" class="form-control" >
<div *ngIf="name.touched && !name.valid" class="alert alert-danger">Name is required.</div>

<label class="req" for="email">Email</label>
<input [(ngModel)]="user.email" #email="ngForm" ngControl="email" type="text" id="email" class="form-control" >
<div class="alert alert-danger" *ngIf="email.touched && email.errors" >
<div *ngIf="email.errors.mailFormat"> Email is not valid.</div>
<div *ngIf="email.errors.required"> Email is required.</div></div>

<label for="phone">Phone</label>
<input [(ngModel)]="user.phone" #phone="ngForm" ngControl="phone" type="text" id="phone" class="form-control" >

<fildset >
<legend>Address</legend>
</fildset>
<div class="form-group" ngControlGroup="address">
<label for="street">Street</label>
<input [(ngModel)]="user.address.street" #street="ngForm" ngControl="street" type="text" id="street" class="form-control">

<label for="suite">Suite</label>
<input [(ngModel)]="user.address.suite" #suite="ngForm" ngControl="suite" type="text" id="suite" class="form-control">

<label for="city">City</label>
<input [(ngModel)]="user.address.city" #city="ngForm" ngControl="city" type="text" id="city" class="form-control">

<label for="zipcode">ZipCode</label>
<input [(ngModel)]="user.address.zipcode" #zipcode="ngForm" ngControl="zipcode" type="text" id="zipcode" class="form-control">
</div>
</div>



<button [disabled]="!form.valid" type="submit" class="btn btn-primary">{{buttonName}}</button>

</form>
`,
        styles: [
            `.ng-touched.ng-invalid{
border:1px solid red;
}`],
        directives: [ROUTER_DIRECTIVES],
        providers: [UserService]
    }
)
export class AddUserComponent implements CanDeactivate, OnInit {
    title: string;
    form: ControlGroup;
    user = new User();
    buttonName: string;

    constructor(private _fb: FormBuilder, private _router: Router, private _users: UserService, private _routeParams: RouteParams) {

    }

    ngOnInit(): any {
        this.initEditing(this._routeParams.get("id"));

        return this.initValidation();

    }

    initEditing(id?) {
        if (id) {
            this.title = "Edit a new user";
            this.buttonName = "Update";
            this._users.getUser(id).subscribe(u =>
                this.user = u , responce => {
                    if (responce.status == 404)
                        this._router.navigate(['NotFound']);
                })
        }
        else {
            this.title = "Create a new user";
            this.buttonName = "Save New";
        }
    }

    initValidation() {
        return this.form = this._fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            email: ['', Validators.compose([Validators.required, CustomValidators.mailFormat])],
            phone: [],
            address: this._fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        })
    }

    routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any {
        if (this.form.dirty)
            return confirm("Are you sure?");
    }

    update() {
        console.log("update");
        this._users.updateUser(this.user).subscribe(res => {
            console.log(res);

        });
    }

    saveNew() {
        console.log("Save New");
        this._users.setUser(this.form.value).subscribe(res => {
            console.log(res);
            this.form = new ControlGroup();
            console.log(this.form);
            this._router.navigate(['Users']);
        });
    }

    onClick() {
        console.log(this.form);
        if(this.buttonName == "Save New") {
            this.saveNew();
        }
        else {
            this.update();
        }

    }

}
