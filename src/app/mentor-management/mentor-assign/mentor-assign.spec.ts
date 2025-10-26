import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAssign } from './mentor-assign';

describe('MentorAssign', () => {
  let component: MentorAssign;
  let fixture: ComponentFixture<MentorAssign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentorAssign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorAssign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
