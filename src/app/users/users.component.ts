import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../entities/User';
import { usersService } from '../service/usersService';
import { generalServices } from '../service/generalServices';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ usersService,generalServices ]
})

export class UsersComponent implements OnInit {

  private user: User;
  private users: User[];
  private msgErro:string;

  constructor(private router: Router, private service: usersService) { }

  ngOnInit() {
    this.allUsers();
  }

  allUsers() {
    this.service.loadAllUsers()
      .subscribe(
                success => this.processarUsers(success),
                error => this.msgErro = 'Não foi possível autenticar!');
  }

  processarUsers(users:[User]){
    this.users = users;
  }

  newUser(){
    this.router.navigate(["/userDetail"]);
  }

  toUserDetail(usr:User){
    this.router.navigate(['/userDetail',usr]);
  }

}
