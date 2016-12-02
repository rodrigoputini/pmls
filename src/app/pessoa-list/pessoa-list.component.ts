import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Pessoa } from '../entities/Pessoa';
import { Endereco } from '../entities/Endereco';
import { Artigo } from '../entities/Artigo';
import { pessoaService } from '../service/pessoaService';
import { generalServices } from '../service/generalServices';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css'],
  providers: [ pessoaService,generalServices ]
})
export class PessoaListComponent implements OnInit {

  private pessoa:Pessoa;
  private pessoas:Pessoa[];
  private msgErro:string;
  private searchField:string;
  private searchBy:string;
  private buscapor = ["nome","cpf","rg","apelido","cidade","artigo"];

  constructor(private router: Router, private service: pessoaService) { }

  ngOnInit() {
    //inicializa pessoa
    this.pessoa = new Pessoa();

    //inicializa o tipo de busca
    if(!this.searchBy){this.searchBy = "nome";}


  }

  load(){
    if(this.searchBy==="nome"){
      this.pessoa.nome = this.searchField;
      this.loadByName();
    }
    if(this.searchBy==="cpf"){
      this.pessoa.cpf = this.searchField;
      this.loadByCPF();
    }
    if(this.searchBy==="rg"){
      this.pessoa.rg = this.searchField;
      this.loadByRG();
    }
    if(this.searchBy==="apelido"){
      this.pessoa.apelido = this.searchField;
      this.loadByApelido();
    }
    if(this.searchBy==="cidade"){
      let endereco:Endereco;
      endereco = new Endereco();
      endereco.cidade = this.searchField;
      this.loadByCidade(endereco);
    }
    if(this.searchBy==="artigo"){
      let artigo:Artigo;
      artigo = new Artigo();
      artigo.numero = this.searchField;
      this.loadByArtigo(artigo);
    }
  }

//metodos para cada tipo de busca de pessoa
  loadByName(){
    this.service.loadPessoaByNome(this.pessoa)
      .subscribe(
                success => this.processarPessoas(success),
                error => this.processarErros(error))
  }
  loadByCPF(){
    this.service.loadPessoaByCPF(this.pessoa)
      .subscribe(
                success => this.processarPessoas(success),
                error => this.processarErros(error))
  }
  loadByRG(){
    this.service.loadPessoaByRG(this.pessoa)
      .subscribe(
                success => this.processarPessoas(success),
                error => this.processarErros(error))
  }
  loadByApelido(){
    this.service.loadPessoaByApelido(this.pessoa)
      .subscribe(
                success => this.processarPessoas(success),
                error => this.processarErros(error))
  }
  loadByCidade(endereco:Endereco){
    this.service.loadPessoaByCidade(endereco)
      .subscribe(
                success => this.processarPessoas(success),
                error => this.processarErros(error))
  }
  loadByArtigo(artigo:Artigo){
    this.service.loadPessoaByArtigo(artigo)
      .subscribe(
                success => this.processarPessoas(success),
                error => this.processarErros(error))
  }

  processarPessoas(pessoas:[Pessoa]){
    if(!pessoas[0]){
      this.pessoas = null;
      this.msgErro = "Nenhum registro encontrado!";
    }
    else{
      this.pessoas = pessoas;
      this.msgErro = null;
    }
  }

  processarErros(erro:any){
    this.pessoas = null;
    this.msgErro = "Nenhum registro encontrado!";
  }

  toPessoaDetail(){
    this.router.navigate(['/pessoaDetail']);
  }


}
