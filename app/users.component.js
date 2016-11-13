System.register(["angular2/core", "./user.service", "angular2/http"], function(exports_1, context_1) {
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
    var core_1, user_service_1, http_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            /**
             * Created by MyHomePC2 on 11.11.2016.
             */
            UsersComponent = (function () {
                function UsersComponent(_usersJson) {
                    this._usersJson = _usersJson;
                    this.users = [];
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    return this._usersJson.getUsers().subscribe(function (posts) { return _this.users = posts; });
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        template: "\n<h1>Users</h1>\n<p>\n<a class=\"btn btn-primary\" href=\"/users/new\">Add User</a>\n</p>\n<table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Edit</th>\n        <th>Delete</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"#user of users\">\n      <tr>\n        <td>{{user.name}}</td>\n        <td>{{user.email}}</td>\n        <td><i class=\"glyphicon glyphicon-edit\"></i></td>\n        <td><i class=\"glyphicon glyphicon-remove\"></i></td>\n      </tr>   \n    </tbody>\n  </table>\n",
                        providers: [user_service_1.UserService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map