import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LionChillComponent } from './lion-chill.component';

describe('LionChillComponent', () => {
  let component: LionChillComponent;
  let fixture: ComponentFixture<LionChillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LionChillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LionChillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
