import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../entities/User';
import { usersService } from '../service/usersService';
import { generalServices } from '../service/generalServices';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [ usersService,generalServices, User ]
})
export class UserDetailComponent implements OnInit {

   private user:User;
   private msgErro:string;
   private graduacoes = ["Soldado","Cabo","Sargento","Oficial","Civil"];
   private roles = ["manager","user"];

  constructor(private router: Router, private service: usersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let usr = this.route.params.subscribe(params => {
            let usrId = params['_id'];
            let username = params['username'];
            let password = params['password'];
            let nomecompleto = params['nomecompleto'];
            let graduacao = params['graduacao'];
            let email = params['email'];
            let role = params['role'];

            if(usrId){
                this.user = new User();
                this.user._id = usrId;
                this.user.username = username;
                this.user.graduacao = graduacao;
                this.user.password = password;
                this.user.nomecompleto = nomecompleto;
                this.user.email = email;
                this.user.role = role;

            }
            else {
                this.user = new User();
            }
        });
  }


  saveUser(){
    if(this.user._id){
      this.service.updateUser(this.user)
      .subscribe(
                success => this.msgErro = "Atualizado com sucesso!",
                error => this.msgErro = 'Não foi atualizar!');
    }
    else{
      this.service.insertUser(this.user)
      .subscribe(
                success => this.msgErro = "Inserido com sucesso",
                error => this.msgErro = 'Não foi possível inserir!');
    }
    this.router.navigate(['/users']);
  }
}
