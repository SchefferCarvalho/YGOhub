import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartasTipo, Cartas, Usuario, Deck,Login } from './carta';
import { tap, take } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly API = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  listTipoCarta(){
    return this.http.get<CartasTipo[]>(this.API+'/td_tipo_carta')
    .pipe(
      tap(console.log)
    );
  }

  listCarta(){
    return this.http.get<Cartas[]>(this.API+'/tb_carta')
    .pipe(
      tap(console.log)
    );
  }

  listUsuario(){
    return this.http.get<Usuario>(this.API+'/tb_usuario').pipe(tap(console.log))
  }

  login(){
    return this.http.get<Login>(this.API+'/tb_usuario').pipe(tap(console.log));
  }

  listDeck(){
    return this.http.get<Deck[]>(this.API+'/tb_deck')
    .pipe(
      tap(console.log)
    );
  }

  post(usuario){
    return this.http.post(this.API+'/tb_usuario',usuario);
  }
  
}
