import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInventaireComponent } from './admin-inventaire.component';

describe('AdminInventaireComponent', () => {
  let component: AdminInventaireComponent;
  let fixture: ComponentFixture<AdminInventaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInventaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInventaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
