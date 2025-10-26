import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
interface MentorReviewInterface {
  feedback_score: number;
  remarks: string;
}
@Component({
  selector: 'app-mentor-review',
  imports: [CommonModule,FormsModule],
  templateUrl: './mentor-review.html',
  styleUrl: './mentor-review.css',
})
export class MentorReview implements OnInit {
 review: MentorReviewInterface = { feedback_score: 0, remarks: '' };
  mentorId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.mentorId = +this.route.snapshot.paramMap.get('id')!;
  }

  submitReview(): void {
    console.log(`Review for Mentor ID ${this.mentorId}:`, this.review);
    alert('Review submitted successfully!');
    // TODO: Replace with API POST call
  }
}
