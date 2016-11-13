import {Injectable} from "angular2/src/core/di/decorators";
import {Http} from "angular2/src/http/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
constructor(private _http: Http) {}
    url = "http://jsonplaceholder.typicode.com"
    getUsers(){
       return this._http.get("http://jsonplaceholder.typicode.com/users").map( res => res.json());
    }
}
