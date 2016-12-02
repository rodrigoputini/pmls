import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../entities/User';
import { Observable }     from 'rxjs/Observable';
import { generalServices } from './generalServices';
import '../operators/rxjsOperators';

@Injectable()
export class usersService{
  private userUrl = "/users";
  constructor (private http: Http, private services: generalServices) {}


  loadAllUsers(): Observable<[User]> {
  		let params = "";

  		return this.http.post(this.services.url(this.userUrl), params,
  						this.services.headers())
  	                .map(this.services.extrairDados)
  	                .catch(this.services.processarErros);
  	}

    updateUser(usr: User): Observable<string> {
    		let params = JSON.stringify(usr);
        let updateUrl = this.userUrl+"/update";

    		return this.http.post(this.services.url(updateUrl), params,
    						this.services.headers())
    	                .map(this.services.extrairDados)
    	                .catch(this.services.processarErros);
    	}
      insertUser(usr: User): Observable<string> {
          let params = JSON.stringify(usr);
          let updateUrl = this.userUrl+"/insert";

          return this.http.post(this.services.url(updateUrl), params,
                  this.services.headers())
                        .map(this.services.extrairDados)
                        .catch(this.services.processarErros);
        }
}
