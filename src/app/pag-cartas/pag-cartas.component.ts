import { Component, OnInit } from '@angular/core';
import { CartasTipo, Cartas } from '../carta';
import { AppService } from '../app.service';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-pag-cartas',
  templateUrl: './pag-cartas.component.html',
  styleUrls: ['./pag-cartas.component.css']
})
export class PagCartasComponent implements OnInit {

  CartasTipo: CartasTipo[];
  Cartas: Cartas[];

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.listTipoCarta().subscribe(dados => this.CartasTipo = dados);
    this.service.listCarta().subscribe(dados => this.Cartas = dados);

  }

}



