import { Injectable } from '@angular/core';
import { Login, Usuario } from '../carta';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  private usuarioAutenticado: boolean = false;

  usua: Usuario
  dado: string
  senha: string

  fazerLogin(usuario: Login, usua: Usuario) {

    //this.dado = this.usua.email_usua.toString();
    //this.senha = this. usua.pwd_usua.toString();

    if (usuario.email_usua === this.dado && usuario.pwd_usua === usua.pwd_usua) {
      this.usuarioAutenticado = true;
      console.log('sucesso!')

      this.router.navigate(['/perfil']);

    } else {
console.log('Email ou senha incorreto!')
      this.usuarioAutenticado = false;

    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }
}
