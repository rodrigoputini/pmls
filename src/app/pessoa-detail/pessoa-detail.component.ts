import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Pessoa } from '../entities/Pessoa';
import { Artigo } from '../entities/Artigo';
import { Endereco } from '../entities/Endereco';
import { pessoaService } from '../service/pessoaService';
import { generalServices } from '../service/generalServices';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.css'],
  providers: [ pessoaService,generalServices ]
})
export class PessoaDetailComponent implements OnInit {

  private pessoa:Pessoa;
  private msgErro:string;
  private bo:string;
  private artigo:string;
  private artigos:Artigo[];
  private endereco:Endereco;

  constructor(private router: Router, private service: pessoaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.endereco = new Endereco();
    this.endereco.pais="Brasil";
    this.pessoa = new Pessoa();
    let pss = this.route.params.subscribe(params => {
            let pssId = params['_id'];
            if(pssId){
                this.pessoa._id = pssId;
                this.service.loadPessoaById(this.pessoa)
                .subscribe(
                          success => this.processarPessoa(success),
                          error => this.processarErros(error));

            }
        });
      this.service.loadArtigos()
          .subscribe(
                    success => this.processarArtigos(success),
                    error => this.processarErros(error))
  }

  processarPessoa(pessoa:Pessoa){
    if(pessoa){
      this.pessoa = pessoa;
      this.msgErro = null;
    }
    else{
      this.pessoa = new Pessoa();
      this.msgErro = "Nenhum registro encontrado!";

    }
  }

  processarErros(erro:any){
    this.pessoa = new Pessoa();
    this.msgErro = "Nenhum registro encontrado!";
  }
  addBo(){
    if(!this.pessoa.bos)
    {
      this.pessoa.bos = new Array<string>();
    }
    this.pessoa.bos.push(this.bo);
    this.bo = null;
  }
  rmBo(i:number){
    this.pessoa.bos.splice(i,1);
  }

  addArtigo(){
    if(!this.pessoa.artigos)this.pessoa.artigos = new Array<Artigo>();

    var flag = false;
    for(let art of this.pessoa.artigos){
      if(art.numero==this.artigo)
      flag = true;
    }
    if(!flag){
      let art = new Artigo();
      art.numero = this.artigo;
      this.service.loadArtigoByNumero(art)
          .subscribe(
                    success => this.processarArtigo(success),
                    error => this.processarErros(error))
    }
  }
  rmArtigo(i:number){
    this.pessoa.artigos.splice(i,1);
  }

  addAddress(){
    if(!this.pessoa.enderecos)this.pessoa.enderecos = new Array<Endereco>();
    this.pessoa.enderecos.push(this.endereco);
    this.endereco = new Endereco();
    this.endereco.pais = "Brasil";
  }
  rmAddress(i:number){
    this.pessoa.enderecos.splice(i,1);
  }


  processarArtigos(artigos:[Artigo]){
    if(!artigos[0]){
      this.artigos = null;
      this.msgErro = "Nenhum registro encontrado!";
    }
    else{
      this.artigos = artigos;
      this.msgErro = null;
    }
  }

  processarArtigo(artigo:Artigo){
    if(!artigo){
      this.msgErro = "Nenhum registro encontrado!";
    }
    else{
      this.pessoa.artigos.push(artigo);
      this.msgErro = null;
    }
  }

  savePeople(){
    if(this.pessoa._id){
      this.service.updatePessoa(this.pessoa)
      .subscribe(
                success => this.msgErro = "Atualizado com sucesso!",
                error => this.msgErro = 'Não foi atualizar!');
    }
    else{
      this.service.insertPessoa(this.pessoa)
      .subscribe(
                success => this.msgErro = "Inserido com sucesso",
                error => this.msgErro = 'Não foi possível inserir!');
    }
    this.router.navigate(['/pessoaList']);
  }
}
