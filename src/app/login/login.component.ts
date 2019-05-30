import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import {Login, Usuario} from '../carta';
import { AppService } from '../app.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email
  senha
  usuario: Login 
  usua: Usuario

  constructor(private authservice: AuthService, private service: AppService) { }

  ngOnInit() {
    this.service.listUsuario().subscribe(dado => this.usua = dado);
    console.log(this.usua)
  }

  fazerLogin(){

    this.usuario = new Login(
      this.email,
      this.senha
    );

   
    this.authservice.fazerLogin(this.usuario,this.usua);
  }

}
