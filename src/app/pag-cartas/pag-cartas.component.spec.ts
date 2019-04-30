import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagCartasComponent } from './pag-cartas.component';

describe('PagCartasComponent', () => {
  let component: PagCartasComponent;
  let fixture: ComponentFixture<PagCartasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagCartasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
