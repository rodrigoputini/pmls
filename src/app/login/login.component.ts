import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../entities/User';
import { loginService } from '../service/loginService';
import { generalServices } from '../service/generalServices';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ loginService,generalServices ]
})
export class LoginComponent implements OnInit {

  private usr: User;
  private msgErro: string;
  constructor(private router: Router, private logService: loginService) { }

  ngOnInit() {
    delete localStorage['token'];
    delete localStorage['nomeusuario'];
    delete localStorage['role'];
    this.usr = new User();
  }


  authorize() {
		this.logService.auth(this.usr)
			.subscribe(
                success => this.processarLogin(success),
                error => this.msgErro = 'Não foi possível autenticar!');
	}


  processarLogin(usuario: User) {
		localStorage['token'] = usuario._id;
    localStorage['nomeusuario'] = usuario.nomecompleto;
    localStorage['role'] = usuario.role;
    this.router.navigate(['/home']);
	}
}
