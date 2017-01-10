System.register(["angular2/core", "./posts.service", "./features/spinner.component", "./user.service", "./features/pagination.component"], function(exports_1, context_1) {
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
    var core_1, posts_service_1, spinner_component_1, user_service_1, pagination_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_posts, _users) {
                    this._posts = _posts;
                    this._users = _users;
                    this.posts = [];
                    this.comments = [];
                    this.currentPost = {};
                    this.postsLoadong = true;
                    this.users = [];
                    this.pageDecade = 0;
                    this.postsDecade = [];
                    this.setArticleAsDefault();
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.getUsers();
                    this.getPosts();
                };
                PostsComponent.prototype.setArticleAsDefault = function () {
                    this.currentPost = { title: "Select a news", body: "Is not selected yet. " };
                    this.comments = [];
                };
                PostsComponent.prototype.getPosts = function () {
                    var _this = this;
                    this._posts.getPosts().subscribe(function (res) {
                        _this.posts = res;
                        _this.postsLoadong = false;
                        _this.fillPostsDecade();
                    }, function (error) { return console.log(error); });
                };
                PostsComponent.prototype.getUsers = function () {
                    var _this = this;
                    this._users.getUsers().subscribe(function (res) { return _this.users = res; });
                };
                PostsComponent.prototype.selectPost = function (post) {
                    var _this = this;
                    this.commentsLoading = true;
                    this.currentPost = post;
                    this._posts.getComments(post.id).subscribe(function (res) {
                        _this.comments = res;
                        _this.commentsLoading = false;
                    });
                };
                PostsComponent.prototype.filterPosts = function (userId) {
                    var _this = this;
                    if (userId == "all") {
                        this.getPosts();
                    }
                    else {
                        this.postsLoadong = true;
                        this._posts.getPostsByUser(userId).subscribe(function (res) {
                            _this.posts = res,
                                _this.fillPostsDecade();
                            _this.postsLoadong = false;
                            _this.setArticleAsDefault();
                        });
                    }
                };
                PostsComponent.prototype.countPages = function () {
                    this.pageDecade = this.posts.length / 10;
                    this.pageDecade += (this.posts.length % 10) > 0 ? 1 : 0;
                    console.log("countPages(), pageDecade: " + this.pageDecade);
                };
                PostsComponent.prototype.fillPostsDecade = function (decade) {
                    console.log("userId: " + decade);
                    this.countPages();
                    if (!decade)
                        decade = 1;
                    var start = decade == 1 ? 0 : (decade - 1) * 10;
                    var end = decade == this.pageDecade ? this.posts.length - 1 : start + 10;
                    this.postsDecade = this.posts.slice(start, end);
                    console.log("pageDecade : " + this.pageDecade);
                    console.log("this.posts.length: " + this.posts.length);
                    console.log("start: " + start);
                    console.log("end: " + end);
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        template: "\n<div class=\"container\" >\n\n\n <header>  \n<h1>Posts</h1>\n\n \n</header>\n\n<nav> \n<select class=\"form-control\" data-live-search=\"true\" #u (change)=\"filterPosts(u.value)\" alt=\"select an author\">\n  <option  value=\"all\" >Select User ...</option>\n  <option *ngFor=\"#user of users\"  value='{{user.id}}'>{{user.name}}</option>\n\n </select>\n<pagination pages=\"{{pageDecade}}\" (selectedDecade)=\"fillPostsDecade($event.value)\" ></pagination>\n\n<spinner [visible]=\"postsLoadong\"></spinner>\n<ul  class=\"list-group\" *ngFor=\"#post of postsDecade\">\n<li class=\"list-group-item\">\n<a (click)=\"selectPost(post)\">{{post.title}}</a>\n</li>\n</ul>\n</nav>\n\n\n<article>\n<h3 class=\"list-group-item selected\"> {{currentPost.title}}</h3>\n<p class=\"list-group-item\" >{{currentPost.body}}</p>\n<div class=\"media\">\n<spinner [visible]=\"commentsLoading\"></spinner>\n<div *ngFor=\"#comment of comments\">\n\n <div class=\"media-left\" >\n    <a href=\"#\">\n      <img class=\"media-object thumbnail\"  src=\"http://lorempixel.com/80/80/people?/random={{comment.id}}\" alt=\"...\">\n    </a>\n  </div>\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">{{comment.name}}</h4>\n    <p>{{comment.body}}</p>\n  </div>\n</div>\n </div>\n</article>\n<footer>Copyright \u00A9 angular2.com</footer>\n</div>\n",
                        directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent],
                        providers: [posts_service_1.PostsService, user_service_1.UserService],
                        styleUrls: ['app/styles/layout.css']
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, user_service_1.UserService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map