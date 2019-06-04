import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDeckPage } from './criar-deck.page';

describe('CriarDeckPage', () => {
  let component: CriarDeckPage;
  let fixture: ComponentFixture<CriarDeckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarDeckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarDeckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
