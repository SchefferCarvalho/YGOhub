import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagDecksComponent } from './pag-decks.component';

describe('PagDecksComponent', () => {
  let component: PagDecksComponent;
  let fixture: ComponentFixture<PagDecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagDecksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
