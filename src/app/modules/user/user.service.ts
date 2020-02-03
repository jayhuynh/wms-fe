import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(environment.apiEndpoint + '/users');
  }

  getUser(id: number) {
    return this.http.get(environment.apiEndpoint + '/users/' + id);
  }
}
