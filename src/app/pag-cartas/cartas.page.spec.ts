import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasPage } from './cartas.page';

describe('CartasPage', () => {
  let component: CartasPage;
  let fixture: ComponentFixture<CartasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
