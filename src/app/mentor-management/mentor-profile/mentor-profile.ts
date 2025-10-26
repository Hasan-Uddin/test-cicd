import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
interface MentorProfileInterface {
  mentor_id: number;
  full_name: string;
  qualification: string;
  experience_years: number;
  expertise_area: string;
  designation: string;
  organization: string;
  email: string;
  contact_phone: string;
  status: string;
}
@Component({
  selector: 'app-mentor-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './mentor-profile.html',
  styleUrl: './mentor-profile.css',
})
export class MentorProfile implements OnInit{
  mentor!: MentorProfileInterface;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    // TODO: Fetch mentor profile by id from API
    this.mentor = {
      mentor_id: id,
      full_name: 'John Doe',
      qualification: 'MSc CS',
      experience_years: 5,
      expertise_area: 'Web Development',
      designation: 'Senior Developer',
      organization: 'Tech Corp',
      email: 'john@example.com',
      contact_phone: '+123456789',
      status: 'Active'
    };
  }

  removeMentor(): void {
    alert(`Mentor ${this.mentor.full_name} removed!`);
    // TODO: Call API to remove mentor
  }
}
