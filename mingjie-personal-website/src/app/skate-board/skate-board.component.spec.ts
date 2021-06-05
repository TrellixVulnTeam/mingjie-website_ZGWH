import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkateBoardComponent } from './skate-board.component';

describe('SkateBoardComponent', () => {
  let component: SkateBoardComponent;
  let fixture: ComponentFixture<SkateBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkateBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkateBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
