import {Injectable} from "angular2/src/core/di/decorators";
import {Http} from "angular2/src/http/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    url:string = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) {
    }

    getPosts() {
       return this._http.get(this.url).map(res => res.json());
    }

    getComments(id) {
        return this._http.get(this.url + "/" + id + "/comments").map(res =>  res.json());
    }

    getPostsByUser(userId) {
        return this._http.get(this.url + "?userId=" + userId).map(res => res.json());
    }
}
