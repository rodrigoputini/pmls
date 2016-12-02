import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Veiculo } from '../entities/Veiculo';
import { veiculoService } from '../service/veiculoService';
import { generalServices } from '../service/generalServices';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css'],
  providers: [ veiculoService,generalServices ]
})
export class VeiculoListComponent implements OnInit {

  private veiculo:Veiculo;
  private veiculos:Veiculo[];
  private msgErro:string;

  constructor(private router: Router, private service: veiculoService) { }

  ngOnInit() {
    this.veiculo = new Veiculo();
  }

  novoVeiculo(){
    this.router.navigate(['/veiculoDetail']);
  }
  toVclDetail(vcl:Veiculo){
    this.router.navigate(['/veiculoDetail',vcl]);
  }

  loadByPlaca(){
    this.service.loadVeiculoByPlaca(this.veiculo)
      .subscribe(
                success => this.processarVeiculos(success),
                error => this.msgErro = 'Não foram encontrados registros!');
  }
  processarVeiculos(veiculos:[Veiculo]){
    if(!veiculos[0]){
      this.veiculos = null;
      this.msgErro = "Não foram encontrados registros!";
    }
    else{
      this.veiculos = veiculos;
      this.msgErro = null;
    }
  }



}
