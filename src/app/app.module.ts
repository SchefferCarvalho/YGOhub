import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CriarDecksComponent } from './criar-decks/criar-decks.component';
import { LoginComponent } from './login/login.component';
import { PagCartasComponent } from './pag-cartas/pag-cartas.component';
import { PagDecksComponent } from './pag-decks/pag-decks.component';
import { PagFavoritoComponent } from './pag-favorito/pag-favorito.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { routing } from './app-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CriarDecksComponent,
    LoginComponent,
    PagCartasComponent,
    PagDecksComponent,
    PagFavoritoComponent,
    InicioComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }