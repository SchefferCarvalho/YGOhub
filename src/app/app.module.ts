import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
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
import { ButtonModule } from 'primeng/button';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuModule } from 'primeng/menu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MenuItem } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

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
    PerfilComponent,
    SearchBarComponent

  ],
  imports: [
    BrowserModule,
    routing,
    ButtonModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    SidebarModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    DropdownModule,
    CheckboxModule,
    InputTextModule,
    MenuModule,
    SlideMenuModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }