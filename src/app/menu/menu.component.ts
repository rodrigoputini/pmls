import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../entities/Menu';
import { menuService } from '../service/menuService';
import { generalServices } from '../service/generalServices';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ menuService,generalServices ]
})
export class MenuComponent implements OnInit {

  private role: string;
  private menu: Menu;
  private menus: Menu[];
  private msgErro:string;
  private currentUser:string;

  constructor(private router: Router, private service: menuService) { }

  ngOnInit() {

    if (!localStorage['token']) {
        this.router.navigate(['']);
		}
    else{
      this.currentUser = localStorage['nomeusuario']; 
      this.menu = new Menu();
      this.role = localStorage['role'];
      this.load();
    }
  }


  load() {
    this.menu.role = this.role;
    this.service.loadMenus(this.menu)
      .subscribe(
                success => this.processarMenus(success),
                error => this.msgErro = 'Não foi possível autenticar!');
  }

  processarMenus(menus:[Menu]){
    this.menus = menus;
  }

}
