import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../operators/rxjsOperators';

@Injectable()
export class generalServices {

	private API_URL: string = 'http://localhost:3000';

	url(path: string) {
		return this.API_URL + path;
	}

	headers() {
		let headersParams = { 'Content-Type': 'application/json' };
		if (localStorage['token']) {
			//headersParams['Authorization'] = localStorage['token'];
		}
		let headers = new Headers(headersParams);
    	let options = new RequestOptions({ headers: headers });
    	return options;
	}

	extrairDados(response: Response) {
			let data = response.json();
    	return data || {};
  	}

  	processarErros(erro: any) {
	    return Observable.throw(erro);
	}
}
