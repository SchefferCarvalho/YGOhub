
import { Component, OnInit, NgModule } from '@angular/core';
import { Usuario } from '../carta';
import { AppService } from '../app.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  nome
  email
  password
  nick
  usuario: Usuario

  constructor(private service: AppService) { }

  CriarUsuario() {
    this.usuario = new Usuario(
      this.email,
      this.nome,
      this.nick,
      this.password

    );


    this.service.post(JSON.stringify(this.usuario)).subscribe(
      success => console.log('sucesso')
    )


    console.log(this.usuario);

  }


  ngOnInit() {


  }

}