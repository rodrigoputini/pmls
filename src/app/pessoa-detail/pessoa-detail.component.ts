import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Pessoa } from '../entities/Pessoa';
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

  constructor(private router: Router, private service: pessoaService, private route: ActivatedRoute) { }

  ngOnInit() {
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
  }

  processarPessoa(pessoa:Pessoa){
    if(pessoa){
      this.pessoa = new Pessoa();
      this.msgErro = "Nenhum registro encontrado!";
    }
    else{
      this.pessoa = pessoa;
      this.msgErro = null;
    }
  }

  processarErros(erro:any){
    this.pessoa = new Pessoa();
    this.msgErro = "Nenhum registro encontrado!";
  }
}
