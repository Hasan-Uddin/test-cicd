import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorReview } from './mentor-review';

describe('MentorReview', () => {
  let component: MentorReview;
  let fixture: ComponentFixture<MentorReview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentorReview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorReview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
