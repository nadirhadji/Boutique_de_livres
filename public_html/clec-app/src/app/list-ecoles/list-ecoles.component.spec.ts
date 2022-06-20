import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEcolesComponent } from './list-ecoles.component';

describe('ListEcolesComponent', () => {
  let component: ListEcolesComponent;
  let fixture: ComponentFixture<ListEcolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEcolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEcolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
