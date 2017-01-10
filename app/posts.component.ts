import {Component} from "angular2/core";
import {PostsService} from "./posts.service";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {HTTP_PROVIDERS} from "angular2/http";
import {SpinnerComponent} from "./features/spinner.component";
import {UserService} from "./user.service";
import {Subscription} from "rxjs";
import {escapeValue} from "angular2/src/compiler/util";
import {PaginationComponent} from "./features/pagination.component";

@Component({
        template: `
<div class="container" >


 <header>  
<h1>Posts</h1>

 
</header>

<nav> 
<select class="form-control" data-live-search="true" #u (change)="filterPosts(u.value)" alt="select an author">
  <option  value="all" >Select User ...</option>
  <option *ngFor="#user of users"  value='{{user.id}}'>{{user.name}}</option>

 </select>
<pagination pages="{{pageDecade}}" (selectedDecade)="fillPostsDecade($event.value)" ></pagination>

<spinner [visible]="postsLoadong"></spinner>
<ul  class="list-group" *ngFor="#post of postsDecade">
<li class="list-group-item">
<a (click)="selectPost(post)">{{post.title}}</a>
</li>
</ul>
</nav>


<article>
<h3 class="list-group-item selected"> {{currentPost.title}}</h3>
<p class="list-group-item" >{{currentPost.body}}</p>
<div class="media">
<spinner [visible]="commentsLoading"></spinner>
<div *ngFor="#comment of comments">

 <div class="media-left" >
    <a href="#">
      <img class="media-object thumbnail"  src="http://lorempixel.com/80/80/people?/random={{comment.id}}" alt="...">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">{{comment.name}}</h4>
    <p>{{comment.body}}</p>
  </div>
</div>
 </div>
</article>
<footer>Copyright © angular2.com</footer>
</div>
`,

        directives: [SpinnerComponent, PaginationComponent],
        providers: [PostsService, UserService],
        styleUrls: ['app/styles/layout.css']

    }
)
export class PostsComponent implements OnInit {
    posts = [];
    comments = [];
    currentPost = {};
    postsLoadong: boolean = true;
    commentsLoading: boolean;
    users = [];
    pageDecade: number = 0;
    postsDecade = [];

    constructor(private _posts: PostsService, private _users: UserService) {
        this.setArticleAsDefault();
    }

    ngOnInit(): any {
        this.getUsers();
        this.getPosts();

    }

    setArticleAsDefault() {
        this.currentPost = {title: "Select a news", body: "Is not selected yet. "};
        this.comments = [];
    }

    getPosts() {
        this._posts.getPosts().subscribe(res => {
            this.posts = res;
            this.postsLoadong = false;
            this.fillPostsDecade();
        }, error => console.log(error));

    }

    getUsers() {
        this._users.getUsers().subscribe(res => this.users = res);
    }

    selectPost(post) {
        this.commentsLoading = true;
        this.currentPost = post;
        this._posts.getComments(post.id).subscribe(res => {
            this.comments = res;
            this.commentsLoading = false
        });
    }

    filterPosts(userId) {
        if (userId == "all") {
            this.getPosts();
        } else {
            this.postsLoadong = true;
            this._posts.getPostsByUser(userId).subscribe(res => {
                this.posts = res,
                this.fillPostsDecade();
                this.postsLoadong = false;
                this.setArticleAsDefault();
            });

        }
    }


    countPages() {
        this.pageDecade = this.posts.length / 10;
        this.pageDecade += (this.posts.length % 10) > 0 ? 1 : 0;
        console.log("countPages(), pageDecade: " + this.pageDecade);
    }

    fillPostsDecade(decade?: number) {
        console.log("userId: " + decade);
        this.countPages();
        if (!decade) decade = 1;
        var start = decade == 1 ? 0 : (decade - 1)*10 ;
        var end = decade == this.pageDecade ? this.posts.length-1 : start + 10;
        this.postsDecade = this.posts.slice(start, end);
        console.log("pageDecade : " + this.pageDecade);
        console.log("this.posts.length: " + this.posts.length);
        console.log("start: " + start);
        console.log("end: " + end);
    }

}