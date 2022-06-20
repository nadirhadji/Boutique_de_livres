import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoolPanelComponent } from './shool-panel.component';

describe('ShoolPanelComponent', () => {
  let component: ShoolPanelComponent;
  let fixture: ComponentFixture<ShoolPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoolPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoolPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
