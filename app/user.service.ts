import {Injectable} from "angular2/src/core/di/decorators";
import {Http} from "angular2/src/http/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {User} from "./user.object";

@Injectable()
export class UserService {
constructor(private _http: Http) {}
    url: string = "http://jsonplaceholder.typicode.com/users"
    getUsers(){
       return this._http.get(this.url).map( res => res.json());
    }
    getUser(id){
        return this._http.get(this.url + "/" + id).map( res => res.json());
    }

    updateUser(user: User) {
        return this._http.put(this.url+ "/" + user.id, user).map( res => res.json());
    }
    setUser(user: string) {
      return  this._http.post(this.url, user).map(res => res.json());
    }

    removeUser(id) {
        return this._http.delete(this.url + "/" + id).map(res => res.json());
    }
}
