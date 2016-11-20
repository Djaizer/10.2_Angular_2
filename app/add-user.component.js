System.register(["angular2/src/core/metadata", "angular2/src/common/forms/model", "angular2/src/common/forms/form_builder", "angular2/src/common/forms/validators", "./custom-validators.component", "angular2/router", "angular2/src/router/instruction", "angular2/src/router/router", "./user.service", "./user.object"], function(exports_1, context_1) {
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
    var metadata_1, model_1, form_builder_1, validators_1, custom_validators_component_1, router_1, instruction_1, router_2, user_service_1, user_object_1;
    var AddUserComponent;
    return {
        setters:[
            function (metadata_1_1) {
                metadata_1 = metadata_1_1;
            },
            function (model_1_1) {
                model_1 = model_1_1;
            },
            function (form_builder_1_1) {
                form_builder_1 = form_builder_1_1;
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
            },
            function (custom_validators_component_1_1) {
                custom_validators_component_1 = custom_validators_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (instruction_1_1) {
                instruction_1 = instruction_1_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_object_1_1) {
                user_object_1 = user_object_1_1;
            }],
        execute: function() {
            /**
             * Created by MyHomePC2 on 12.11.2016.
             */
            AddUserComponent = (function () {
                function AddUserComponent(_fb, _router, _users, _routeParams) {
                    this._fb = _fb;
                    this._router = _router;
                    this._users = _users;
                    this._routeParams = _routeParams;
                    this.user = new user_object_1.User();
                }
                AddUserComponent.prototype.ngOnInit = function () {
                    this.initEditing(this._routeParams.get("id"));
                    return this.initValidation();
                };
                AddUserComponent.prototype.initEditing = function (id) {
                    var _this = this;
                    if (id) {
                        this.title = "Edit a new user";
                        this.buttonName = "Update";
                        this._users.getUser(id).subscribe(function (u) {
                            return _this.user = u;
                        }, function (responce) {
                            if (responce.status == 404)
                                _this._router.navigate(['NotFound']);
                        });
                    }
                    else {
                        this.title = "Create a new user";
                        this.buttonName = "Save New";
                    }
                };
                AddUserComponent.prototype.initValidation = function () {
                    return this.form = this._fb.group({
                        name: ['', validators_1.Validators.compose([validators_1.Validators.required, validators_1.Validators.minLength(3)])],
                        email: ['', validators_1.Validators.compose([validators_1.Validators.required, custom_validators_component_1.CustomValidators.mailFormat])],
                        phone: [],
                        address: this._fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                };
                AddUserComponent.prototype.routerCanDeactivate = function (nextInstruction, prevInstruction) {
                    if (this.form.dirty)
                        return confirm("Are you sure?");
                };
                AddUserComponent.prototype.update = function () {
                    console.log("update");
                    this._users.updateUser(this.user).subscribe(function (res) {
                        console.log(res);
                    });
                };
                AddUserComponent.prototype.saveNew = function () {
                    var _this = this;
                    console.log("Save New");
                    this._users.setUser(this.form.value).subscribe(function (res) {
                        console.log(res);
                        _this.form = new model_1.ControlGroup();
                        console.log(_this.form);
                        _this._router.navigate(['Users']);
                    });
                };
                AddUserComponent.prototype.onClick = function () {
                    console.log(this.form);
                    if (this.buttonName == "Save New") {
                        this.saveNew();
                    }
                    else {
                        this.update();
                    }
                };
                AddUserComponent = __decorate([
                    metadata_1.Component({
                        template: "\n <h2>{{title}}</h2>\n<form [ngFormModel]=\"form\" (ngSubmit)=\"onClick()\" >\n\n<fildset>\n<legend>User</legend>\n</fildset>\n<div class=\"form-group\">\n<label class=\"req\" for=\"name\">Name</label>\n<input [(ngModel)]=\"user.name\" #name=\"ngForm\" ngControl=\"name\" type=\"text\" id=\"name\" class=\"form-control\" >\n<div *ngIf=\"name.touched && !name.valid\" class=\"alert alert-danger\">Name is required.</div>\n\n<label class=\"req\" for=\"email\">Email</label>\n<input [(ngModel)]=\"user.email\" #email=\"ngForm\" ngControl=\"email\" type=\"text\" id=\"email\" class=\"form-control\" >\n<div class=\"alert alert-danger\" *ngIf=\"email.touched && email.errors\" >\n<div *ngIf=\"email.errors.mailFormat\"> Email is not valid.</div>\n<div *ngIf=\"email.errors.required\"> Email is required.</div></div>\n\n<label for=\"phone\">Phone</label>\n<input [(ngModel)]=\"user.phone\" #phone=\"ngForm\" ngControl=\"phone\" type=\"text\" id=\"phone\" class=\"form-control\" >\n\n<fildset >\n<legend>Address</legend>\n</fildset>\n<div class=\"form-group\" ngControlGroup=\"address\">\n<label for=\"street\">Street</label>\n<input [(ngModel)]=\"user.address.street\" #street=\"ngForm\" ngControl=\"street\" type=\"text\" id=\"street\" class=\"form-control\">\n\n<label for=\"suite\">Suite</label>\n<input [(ngModel)]=\"user.address.suite\" #suite=\"ngForm\" ngControl=\"suite\" type=\"text\" id=\"suite\" class=\"form-control\">\n\n<label for=\"city\">City</label>\n<input [(ngModel)]=\"user.address.city\" #city=\"ngForm\" ngControl=\"city\" type=\"text\" id=\"city\" class=\"form-control\">\n\n<label for=\"zipcode\">ZipCode</label>\n<input [(ngModel)]=\"user.address.zipcode\" #zipcode=\"ngForm\" ngControl=\"zipcode\" type=\"text\" id=\"zipcode\" class=\"form-control\">\n</div>\n</div>\n\n\n\n<button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-primary\">{{buttonName}}</button>\n\n</form>\n",
                        styles: [
                            ".ng-touched.ng-invalid{\nborder:1px solid red;\n}"],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [form_builder_1.FormBuilder, router_2.Router, user_service_1.UserService, instruction_1.RouteParams])
                ], AddUserComponent);
                return AddUserComponent;
            }());
            exports_1("AddUserComponent", AddUserComponent);
        }
    }
});
//# sourceMappingURL=add-user.component.js.map