import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pessoa } from '../entities/Pessoa';
import { Endereco } from '../entities/Endereco';
import { Artigo } from '../entities/Artigo';
import { Observable }     from 'rxjs/Observable';
import { generalServices } from './generalServices';
import '../operators/rxjsOperators';

@Injectable()
export class pessoaService{
  private pessoaUrl = "/pessoa";
  constructor (private http: Http, private services: generalServices) {}


  loadPessoaByNome(pessoa:Pessoa): Observable<[Pessoa]>{
    let params = JSON.stringify(pessoa);
    let nomeUrl = this.pessoaUrl+"/nome";
    return this.http.post(this.services.url(nomeUrl), params,
            this.services.headers())
                  .map(this.services.extrairDados)
                  .catch(this.services.processarErros);
  }
  loadPessoaByCPF(pessoa:Pessoa): Observable<[Pessoa]>{
    let params = JSON.stringify(pessoa);
    let cpfUrl = this.pessoaUrl+"/cpf";
    return this.http.post(this.services.url(cpfUrl), params,
            this.services.headers())
                  .map(this.services.extrairDados)
                  .catch(this.services.processarErros);
  }
  loadPessoaByRG(pessoa:Pessoa): Observable<[Pessoa]>{
    let params = JSON.stringify(pessoa);
    let rgUrl = this.pessoaUrl+"/rg";
    return this.http.post(this.services.url(rgUrl), params,
            this.services.headers())
                  .map(this.services.extrairDados)
                  .catch(this.services.processarErros);
  }
  loadPessoaByApelido(pessoa:Pessoa): Observable<[Pessoa]>{
    let params = JSON.stringify(pessoa);
    let apelidoUrl = this.pessoaUrl+"/apelido";
    return this.http.post(this.services.url(apelidoUrl), params,
            this.services.headers())
                  .map(this.services.extrairDados)
                  .catch(this.services.processarErros);
  }
  loadPessoaByCidade(endereco:Endereco): Observable<[Pessoa]>{
    let params = JSON.stringify(endereco);
    let cidadeUrl = this.pessoaUrl+"/cidade";
    return this.http.post(this.services.url(cidadeUrl), params,
            this.services.headers())
                  .map(this.services.extrairDados)
                  .catch(this.services.processarErros);
  }
  loadPessoaByArtigo(artigo:Artigo): Observable<[Pessoa]>{
    let params = JSON.stringify(artigo);
    let artigoUrl = this.pessoaUrl+"/artigo";
    return this.http.post(this.services.url(artigoUrl), params,
            this.services.headers())
                  .map(this.services.extrairDados)
                  .catch(this.services.processarErros);
  }

  loadPessoaById(pessoa:Pessoa): Observable<Pessoa>{
    let params = JSON.stringify(pessoa);
    let idUrl = this.pessoaUrl+"/id";
    return this.http.post(this.services.url(idUrl), params,
            this.services.headers())
                  .map(this.services.extrairDados)
                  .catch(this.services.processarErros);

  }
  loadArtigos():Observable<[Artigo]>{
    let artigosUrl = "/artigo/all";
    return this.http.post(this.services.url(artigosUrl),
            this.services.headers())
                  .map(this.services.extrairDados)
                  .catch(this.services.processarErros);

  }
  loadArtigoByNumero(artigo:Artigo): Observable<Artigo>{
    let params = JSON.stringify(artigo);
    let numeroUrl = "/artigo/numero";
    return this.http.post(this.services.url(numeroUrl), params,
            this.services.headers())
                  .map(this.services.extrairDados)
                  .catch(this.services.processarErros);

  }
/*    updateVeiculo(vcl: Veiculo): Observable<string> {
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
        }*/
}
