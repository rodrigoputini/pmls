import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Veiculo } from '../entities/Veiculo';
import { Observable }     from 'rxjs/Observable';
import { generalServices } from './generalServices';
import '../operators/rxjsOperators';

@Injectable()
export class veiculoService{
  private veiculoUrl = "/veiculo";
  constructor (private http: Http, private services: generalServices) {}


  loadAllVeiculos(): Observable<[Veiculo]> {
  		let params = "";

  		return this.http.post(this.services.url(this.veiculoUrl), params,
  						this.services.headers())
  	                .map(this.services.extrairDados)
  	                .catch(this.services.processarErros);
  }

  loadVeiculoByPlaca(vcl:Veiculo): Observable<[Veiculo]>{
    let params = JSON.stringify(vcl);
    let placaUrl = this.veiculoUrl+"/placa";
    return this.http.post(this.services.url(placaUrl), params,
            this.services.headers())
                  .map(this.services.extrairDados)
                  .catch(this.services.processarErros);

  }

  loadVeiculoById(vcl:Veiculo): Observable<Veiculo>{
    let params = JSON.stringify(vcl);
    let idUrl = this.veiculoUrl+"/id";
    return this.http.post(this.services.url(idUrl), params,
            this.services.headers())
                  .map(this.services.extrairDados)
                  .catch(this.services.processarErros);

  }

    updateVeiculo(vcl: Veiculo): Observable<string> {
    		let params = JSON.stringify(vcl);
        let updateUrl = this.veiculoUrl+"/update";

    		return this.http.post(this.services.url(updateUrl), params,
    						this.services.headers())
    	                .map(this.services.extrairDados)
    	                .catch(this.services.processarErros);
    	}
      insertVeiculo(vcl: Veiculo): Observable<string> {
          let params = JSON.stringify(vcl);
          let updateUrl = this.veiculoUrl+"/insert";

          return this.http.post(this.services.url(updateUrl), params,
                  this.services.headers())
                        .map(this.services.extrairDados)
                        .catch(this.services.processarErros);
        }
}
