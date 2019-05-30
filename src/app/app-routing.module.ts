import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { CriarDecksComponent } from './criar-decks/criar-decks.component';
import { PagCartasComponent } from './pag-cartas/pag-cartas.component';
import { PagFavoritoComponent } from './pag-favorito/pag-favorito.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PagDecksComponent } from './pag-decks/pag-decks.component';
import { AuthGuardService } from './guards/auth-guard.service';



const APP_ROUTES: Routes = [
  {path: '', component: InicioComponent},
  {path: 'criar-decks', component: CriarDecksComponent,/*canActivate:[AuthGuardService]*/},
  {path: 'login', component: LoginComponent,},
  {path: 'pag-cartas', component: PagCartasComponent, /*canActivate:[AuthGuardService]*/},
  {path: 'pag-decks', component: PagDecksComponent, /*canActivate:[AuthGuardService]*/},
  {path: 'pag-favorito', component: PagFavoritoComponent, /*canActivate:[AuthGuardService]*/},
  {path: 'perfil', component: PerfilComponent, /*canActivate:[AuthGuardService]*/},
  {path: 'cadastro', component: CadastroComponent,}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);