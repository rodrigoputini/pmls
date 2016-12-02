import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Menu } from '../entities/Menu';
import { Observable }     from 'rxjs/Observable';
import { generalServices } from './generalServices';
import '../operators/rxjsOperators';

@Injectable()
export class menuService{
  private menuUrl = "/menu";
  constructor (private http: Http, private services: generalServices) {}


  loadMenus(menu: Menu): Observable<[Menu]> {
  		let params = JSON.stringify(menu);

  		return this.http.post(this.services.url(this.menuUrl), params,
  						this.services.headers())
  	                .map(this.services.extrairDados)
  	                .catch(this.services.processarErros);
  	}
}
