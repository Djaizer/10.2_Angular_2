import {Component} from "angular2/src/core/metadata";
import {NgFormModel} from "angular2/src/common/forms/directives/ng_form_model";
import {ControlGroup} from "angular2/src/common/forms/model";
import {FormBuilder} from "angular2/src/common/forms/form_builder";
import {Validators} from "angular2/src/common/forms/validators";
import {CustomValidators} from "./custom-validators.component";


/**
 * Created by MyHomePC2 on 12.11.2016.
 */

@Component({
        template: `
<form [ngFormModel]="form" (ngSubmit)="onSubmit()" >
<div class="form-group">
<fildset>
<legend>User</legend>
</fildset>
<label class="req" for="name">Name</label>
<input #name="ngForm" ngControl="name" type="text" id="name" class="form-control" >
<div *ngIf="name.touched && !name.valid" class="alert alert-danger">
Name is required.
</div>

<label class="req" for="email">Email</label>
<input #email="ngForm" ngControl="email" type="text" id="email" class="form-control" >
<div class="alert alert-danger" *ngIf="email.touched && email.errors" >
<div *ngIf="email.errors.mailFormat"> Email is not valid.</div>
<div *ngIf="email.errors.required"> Email is required.</div>

</div>

<label for="phone">Phone</label>
<input #phone="ngForm" ngControl="phone" type="text" id="phone" class="form-control" >

<fildset>
<legend>Address</legend>
</fildset>
<label for="street">Street</label>
<input #street="ngForm" ngControl="street" type="text" id="street" class="form-control">

<label for="suite">Suite</label>
<input #suite="ngForm" ngControl="suite" type="text" id="suite" class="form-control">

<label for="city">City</label>
<input #city="ngForm" ngControl="city" type="text" id="city" class="form-control">

<label for="zipcode">ZipCode</label>
<input #zipcode="ngForm" ngControl="zipcode" type="text" id="zipcode" class="form-control">
</div>


<button [disabled]="!form.valid" type="submit" class="btn btn-primary">Submit</button>

</form>
`,
        styles: [
            `.ng-touched.ng-invalid{
border:1px solid red;
}`
        ]
    }
)
export class AddUserComponent {
    form: ControlGroup;

    constructor(private _fb: FormBuilder) {
        this.form = _fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            email: ['', Validators.compose([Validators.required, CustomValidators.mailFormat])],
            phone: [],
            street: [],
            suite: [],
            city: [],
            zipcode: []

        })
    }


    onSubmit() {
        console.log(this.form);
    }


}
