System.register(["angular2/src/core/metadata", "angular2/src/common/forms/form_builder", "angular2/src/common/forms/validators", "./custom-validators.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var metadata_1, form_builder_1, validators_1, custom_validators_component_1;
    var AddUserComponent;
    return {
        setters:[
            function (metadata_1_1) {
                metadata_1 = metadata_1_1;
            },
            function (form_builder_1_1) {
                form_builder_1 = form_builder_1_1;
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
            },
            function (custom_validators_component_1_1) {
                custom_validators_component_1 = custom_validators_component_1_1;
            }],
        execute: function() {
            /**
             * Created by MyHomePC2 on 12.11.2016.
             */
            AddUserComponent = (function () {
                function AddUserComponent(_fb) {
                    this._fb = _fb;
                    this.form = _fb.group({
                        name: ['', validators_1.Validators.compose([validators_1.Validators.required, validators_1.Validators.minLength(3)])],
                        email: ['', validators_1.Validators.compose([validators_1.Validators.required, custom_validators_component_1.CustomValidators.mailFormat])],
                        phone: [],
                        street: [],
                        suite: [],
                        city: [],
                        zipcode: []
                    });
                }
                AddUserComponent.prototype.onSubmit = function () {
                    console.log(this.form);
                };
                AddUserComponent = __decorate([
                    metadata_1.Component({
                        template: "\n<form [ngFormModel]=\"form\" (ngSubmit)=\"onSubmit()\" >\n<div class=\"form-group\">\n<fildset>\n<legend>User</legend>\n</fildset>\n<label class=\"req\" for=\"name\">Name</label>\n<input #name=\"ngForm\" ngControl=\"name\" type=\"text\" id=\"name\" class=\"form-control\" >\n<div *ngIf=\"name.touched && !name.valid\" class=\"alert alert-danger\">\nName is required.\n</div>\n\n<label class=\"req\" for=\"email\">Email</label>\n<input #email=\"ngForm\" ngControl=\"email\" type=\"text\" id=\"email\" class=\"form-control\" >\n<div class=\"alert alert-danger\" *ngIf=\"email.touched && email.errors\" >\n<div *ngIf=\"email.errors.mailFormat\"> Email is not valid.</div>\n<div *ngIf=\"email.errors.required\"> Email is required.</div>\n\n</div>\n\n<label for=\"phone\">Phone</label>\n<input #phone=\"ngForm\" ngControl=\"phone\" type=\"text\" id=\"phone\" class=\"form-control\" >\n\n<fildset>\n<legend>Address</legend>\n</fildset>\n<label for=\"street\">Street</label>\n<input #street=\"ngForm\" ngControl=\"street\" type=\"text\" id=\"street\" class=\"form-control\">\n\n<label for=\"suite\">Suite</label>\n<input #suite=\"ngForm\" ngControl=\"suite\" type=\"text\" id=\"suite\" class=\"form-control\">\n\n<label for=\"city\">City</label>\n<input #city=\"ngForm\" ngControl=\"city\" type=\"text\" id=\"city\" class=\"form-control\">\n\n<label for=\"zipcode\">ZipCode</label>\n<input #zipcode=\"ngForm\" ngControl=\"zipcode\" type=\"text\" id=\"zipcode\" class=\"form-control\">\n</div>\n\n\n<button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n\n</form>\n",
                        styles: [
                            ".ng-touched.ng-invalid{\nborder:1px solid red;\n}"
                        ]
                    }), 
                    __metadata('design:paramtypes', [form_builder_1.FormBuilder])
                ], AddUserComponent);
                return AddUserComponent;
            }());
            exports_1("AddUserComponent", AddUserComponent);
        }
    }
});
//# sourceMappingURL=add-user.component.js.map