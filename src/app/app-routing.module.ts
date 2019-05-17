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



const APP_ROUTES: Routes = [
  {path: '', component: InicioComponent},
  {path: 'criar-decks', component: CriarDecksComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pag-cartas', component: PagCartasComponent},
  {path: 'pag-decks', component: PagDecksComponent},
  {path: 'pag-favorito', component: PagFavoritoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'cadastro', component: CadastroComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);