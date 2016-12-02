import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule }   from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { VeiculoDetailComponent } from './veiculo-detail/veiculo-detail.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    UsersComponent,
    UserDetailComponent,
    VeiculoListComponent,
    VeiculoDetailComponent,
    PessoaListComponent,
    PessoaDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'userDetail',
        component: UserDetailComponent
      },
      {
        path: 'veiculoList',
        component: VeiculoListComponent
      },
      {
        path: 'veiculoDetail',
        component: VeiculoDetailComponent
      },
      {
        path: 'pessoaList',
        component: PessoaListComponent
      },
      {
        path: 'pessoaDetail',
        component: PessoaDetailComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
