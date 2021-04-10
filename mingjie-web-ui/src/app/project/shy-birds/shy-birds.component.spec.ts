import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShyBirdsComponent } from './shy-birds.component';

describe('ShyBirdsComponent', () => {
  let component: ShyBirdsComponent;
  let fixture: ComponentFixture<ShyBirdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShyBirdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShyBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
