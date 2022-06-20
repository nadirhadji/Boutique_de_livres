import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRabaisComponent } from './admin-rabais.component';

describe('AdminRabaisComponent', () => {
  let component: AdminRabaisComponent;
  let fixture: ComponentFixture<AdminRabaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRabaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRabaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
