import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingIdComponent } from './booking-id.component';

describe('BookingIdComponent', () => {
  let component: BookingIdComponent;
  let fixture: ComponentFixture<BookingIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
