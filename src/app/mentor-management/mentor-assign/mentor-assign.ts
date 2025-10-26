import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface MentorInterface {
  mentor_id: number;
  full_name: string;
}

interface InternInterface {
  user_id: number;
  full_name: string;
}
interface AssignMentorInterface {
  mentor_id: number | null;
  intern_id: number | null;
  duration_months: number;
  mentorship_type: string;
}
@Component({
  selector: 'app-mentor-assign',
  imports: [CommonModule,FormsModule],
  templateUrl: './mentor-assign.html',
  styleUrl: './mentor-assign.css',
})
export class MentorAssign implements OnInit {
  mentors: MentorInterface[] = [];
  interns: InternInterface[] = [];
  assign: AssignMentorInterface = {
    mentor_id: null,
    intern_id: null,
    duration_months: 0,
    mentorship_type: ''
  };

  constructor() {}

  ngOnInit(): void {
    // TODO: Replace with API calls
    this.mentors = [
      { mentor_id: 1, full_name: 'John Doe' },
      { mentor_id: 2, full_name: 'Jane Smith' }
    ];

    this.interns = [
      { user_id: 1, full_name: 'Alice Brown' },
      { user_id: 2, full_name: 'Bob White' }
    ];
  }

  assignMentor(): void {
    console.log('Assigned Mentor:', this.assign);
    alert(`Mentor assigned to intern successfully!`);
    // TODO: Replace with API POST call
  }
}
