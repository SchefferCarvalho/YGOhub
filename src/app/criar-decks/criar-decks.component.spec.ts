import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDecksComponent } from './criar-decks.component';

describe('CriarDecksComponent', () => {
  let component: CriarDecksComponent;
  let fixture: ComponentFixture<CriarDecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarDecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
