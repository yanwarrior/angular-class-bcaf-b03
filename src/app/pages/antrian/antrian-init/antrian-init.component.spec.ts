import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntrianInitComponent } from './antrian-init.component';

describe('AntrianInitComponent', () => {
  let component: AntrianInitComponent;
  let fixture: ComponentFixture<AntrianInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntrianInitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntrianInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
