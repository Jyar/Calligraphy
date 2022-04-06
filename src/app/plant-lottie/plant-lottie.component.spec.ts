import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantLottieComponent } from './plant-lottie.component';

describe('PlantLottieComponent', () => {
  let component: PlantLottieComponent;
  let fixture: ComponentFixture<PlantLottieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantLottieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantLottieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
