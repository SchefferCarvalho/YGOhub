import { Component, OnInit } from '@angular/core';
import { Usuario } from '../carta';
import { AppService } from '../app.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  Usuario: Usuario[];

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.listUsuario().subscribe(dados => this.Usuario = dados);
  }

}
