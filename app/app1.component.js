System.register(['angular2/core', "angular2/router", "./ng-project.component", "./users.component", "./posts.component", "./add-user.component"], function(exports_1, context_1) {
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
    var core_1, router_1, ng_project_component_1, users_component_1, posts_component_1, add_user_component_1;
    var AppComponent1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng_project_component_1_1) {
                ng_project_component_1 = ng_project_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (add_user_component_1_1) {
                add_user_component_1 = add_user_component_1_1;
            }],
        execute: function() {
            AppComponent1 = (function () {
                function AppComponent1(router) {
                    this.router = router;
                }
                AppComponent1.prototype.isRouteActive = function (instruction) {
                    return this.router.isRouteActive(this.router.generate(instruction));
                };
                AppComponent1 = __decorate([
                    router_1.RouteConfig([
                        { path: '/', component: ng_project_component_1.NgProjectComponent, name: 'Home', useAsDefault: true },
                        { path: '/users', component: users_component_1.UsersComponent, name: 'Users' },
                        { path: '/users/new', component: add_user_component_1.AddUserComponent, name: 'NewUser' },
                        { path: '/posts', component: posts_component_1.PostsComponent, name: 'Posts' },
                        { path: '/**', redirectTo: ['Home'], name: 'Other' },
                    ]),
                    core_1.Component({
                        selector: 'my-app1',
                        templateUrl: '/app/app1.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent1);
                return AppComponent1;
            }());
            exports_1("AppComponent1", AppComponent1);
        }
    }
});
//# sourceMappingURL=app1.component.js.map