import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmualtedencapsulationComponent } from './emualtedencapsulation.component';

describe('EmualtedencapsulationComponent', () => {
  let component: EmualtedencapsulationComponent;
  let fixture: ComponentFixture<EmualtedencapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmualtedencapsulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmualtedencapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
