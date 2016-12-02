import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../entities/User';
import { Observable }     from 'rxjs/Observable';
import { generalServices } from './generalServices';
import '../operators/rxjsOperators';

@Injectable()
export class loginService{
  private loginUrl = "/login";
  constructor (private http: Http, private services: generalServices) {}


  auth(usr: User): Observable<User> {
  		let params = JSON.stringify(usr);

  		return this.http.post(this.services.url(this.loginUrl), params,
  						this.services.headers())
  	                .map(this.services.extrairDados)
  	                .catch(this.services.processarErros);
  	}

  authenticated(){
    return localStorage['token'];
  }

  goOut(){
    delete localStorage['token'];
  }
}
