import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { PagCartasComponent } from './pag-cartas/pag-cartas.component';
import { PagDecksComponent } from './pag-decks/pag-decks.component';
import { PagFavoritoComponent } from './pag-favorito/pag-favorito.component';
import { CriarDecksComponent } from './criar-decks/criar-decks.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagInicioComponent,
    PagCartasComponent,
    PagDecksComponent,
    PagFavoritoComponent,
    CriarDecksComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
