import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Veiculo } from '../entities/Veiculo';
import { veiculoService } from '../service/veiculoService';
import { generalServices } from '../service/generalServices';

@Component({
  selector: 'app-veiculo-detail',
  templateUrl: './veiculo-detail.component.html',
  styleUrls: ['./veiculo-detail.component.css'],
  providers: [ veiculoService,generalServices,Veiculo ]
})
export class VeiculoDetailComponent implements OnInit {
  private vcl:Veiculo;
  private msgErro:string;
  private bo:string;

  constructor(private router: Router, private service: veiculoService, private route: ActivatedRoute) { }

  ngOnInit() {
    let vcl = this.route.params.subscribe(params => {
            let vclId = params['_id'];
            if(vclId){
                this.vcl = new Veiculo();
                this.vcl._id = vclId;
                this.service.loadVeiculoById(this.vcl)
                .subscribe(
                          success => this.processarVcl(success),
                          error => this.msgErro = 'Não foi encontrado veículo!');

            }
            else {
                this.vcl = new Veiculo();
            }
        });
  }

  processarVcl(veiculo: Veiculo) {
    this.vcl = veiculo;
  }

  addBo(){
    if(!this.vcl.bos)
    {
      this.vcl.bos = new Array<string>();
    }
    this.vcl.bos.push(this.bo);
    this.bo = null;
  }
  rmBo(i:number){
    this.vcl.bos.splice(i,1);
  }

  saveVcl(){
    if(this.vcl._id){
      this.service.updateVeiculo(this.vcl)
      .subscribe(
                success => this.msgErro = "Atualizado com sucesso!",
                error => this.msgErro = 'Não foi atualizar!');
    }
    else{

      this.service.insertVeiculo(this.vcl)
      .subscribe(
                success => this.msgErro = "Inserido com sucesso",
                error => this.msgErro = 'Não foi possível inserir!');
    }
    this.router.navigate(['/veiculoList']);
  }
}
