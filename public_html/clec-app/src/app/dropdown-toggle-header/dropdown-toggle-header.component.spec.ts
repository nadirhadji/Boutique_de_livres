import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownToggleHeaderComponent } from './dropdown-toggle-header.component';

describe('DropdownToggleHeaderComponent', () => {
  let component: DropdownToggleHeaderComponent;
  let fixture: ComponentFixture<DropdownToggleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownToggleHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownToggleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
