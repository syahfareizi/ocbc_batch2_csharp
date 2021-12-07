import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoencapsulationComponent } from './noencapsulation.component';

describe('NoencapsulationComponent', () => {
  let component: NoencapsulationComponent;
  let fixture: ComponentFixture<NoencapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoencapsulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoencapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
