import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagFavoritoComponent } from './pag-favorito.component';

describe('PagFavoritoComponent', () => {
  let component: PagFavoritoComponent;
  let fixture: ComponentFixture<PagFavoritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagFavoritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
