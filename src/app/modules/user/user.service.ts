import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public reloadUsers = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(environment.apiEndpoint + '/users');
  }

  getUser(id: number) {
    return this.http.get(environment.apiEndpoint + '/users/' + id);
  }

  deleteUser(id: number) {
    return this.http.delete(environment.apiEndpoint + '/users/' + id);
  }
}
