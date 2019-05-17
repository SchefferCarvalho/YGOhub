import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Deck } from '../carta';

@Component({
  selector: 'app-pag-decks',
  templateUrl: './pag-decks.component.html',
  styleUrls: ['./pag-decks.component.css']
})
export class PagDecksComponent implements OnInit {

  Deck: Deck[];

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.listDeck().subscribe(dados => this.Deck = dados);
  }

}
