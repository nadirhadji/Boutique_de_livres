import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownToggleLogedInComponent } from './dropdown-toggle-loged-in.component';

describe('DropdownToggleLogedInComponent', () => {
  let component: DropdownToggleLogedInComponent;
  let fixture: ComponentFixture<DropdownToggleLogedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownToggleLogedInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownToggleLogedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
