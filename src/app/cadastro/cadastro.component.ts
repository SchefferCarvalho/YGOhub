
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
  dado 
  usuario: Usuario

  constructor(private service: AppService) { }

  CriarUsuario() {
    this.usuario = new Usuario(
      this.email,
      this.nome,
      this.nick,
      this.password

    );
    this.dado = JSON.stringify(this.usuario);


    this.service.post(this.dado).subscribe(
      success => console.log('sucesso')
    )


    console.log(this.usuario);

  }


  ngOnInit() {


  }

}