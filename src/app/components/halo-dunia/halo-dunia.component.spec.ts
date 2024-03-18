import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaloDuniaComponent } from './halo-dunia.component';

describe('HaloDuniaComponent', () => {
  let component: HaloDuniaComponent;
  let fixture: ComponentFixture<HaloDuniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaloDuniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaloDuniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
