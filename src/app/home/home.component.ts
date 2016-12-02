import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private nomeusuario:string;

  constructor(private router: Router) { }


  ngOnInit() {
    if (!localStorage['token']) {
        this.router.navigate(['']);
		}
    else{
      this.nomeusuario = localStorage['nomeusuario'];
    }
  }

}
