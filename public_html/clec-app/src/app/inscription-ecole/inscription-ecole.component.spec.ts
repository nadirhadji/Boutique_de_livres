import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEcoleComponent } from './inscription-ecole.component';

describe('InscriptionEcoleComponent', () => {
  let component: InscriptionEcoleComponent;
  let fixture: ComponentFixture<InscriptionEcoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionEcoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
