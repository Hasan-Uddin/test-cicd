import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
interface MentorInterface {
  mentor_id: number;
  full_name: string;
  qualification: string;
  experience_years: number;
  expertise_area: string;
}
@Component({
  selector: 'app-mentor',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './mentor.html',
  styleUrl: './mentor.css',
})
export class Mentor implements OnInit{
  mentors: MentorInterface[] = [];

  constructor() {}

  ngOnInit(): void {
    // TODO: Replace with API call to fetch mentors
    this.mentors = [
      { mentor_id: 1, full_name: 'John Doe', qualification: 'MSc CS', experience_years: 5, expertise_area: 'Web Development' },
      { mentor_id: 2, full_name: 'Jane Smith', qualification: 'PhD AI', experience_years: 8, expertise_area: 'AI & ML' }
    ];
  }
  
}
