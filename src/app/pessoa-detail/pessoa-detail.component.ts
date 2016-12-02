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
  }

}
