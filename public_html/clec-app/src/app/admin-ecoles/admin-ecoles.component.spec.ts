import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEcolesComponent } from './admin-ecoles.component';

describe('AdminEcolesComponent', () => {
  let component: AdminEcolesComponent;
  let fixture: ComponentFixture<AdminEcolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEcolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEcolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
