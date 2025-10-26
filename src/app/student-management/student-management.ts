
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Task {
  name: string;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Pending' | 'Completed';
}

interface Student {
  name: string;
  program: string;
  mentor: string;
  progress: number;
  status: 'Active' | 'Pending' | 'Completed';
  task?: Task[];
}

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-management.html',
  styleUrls: ['./student-management.css']
})
export class Students {

  viewStudent: Student | null = null;
  taskStudent: { student: Student, tasks: Task[] } | null = null;

  students: Student[] = [
    { name: 'Mohammad Arman', program: 'Web Development Internship', mentor: 'Mr. Rahim', progress: 80, status: 'Active',
      task: [
        { name: 'Frontend Design', startDate: '2025-01-12', endDate: '2025-01-20',status:'Pending' },
        { name: 'API Integration', startDate: '2025-01-21', endDate: '2025-01-30',status:'Pending' }
      ]
    },
    { name: 'Nusrat Jahan', program: 'UI/UX Design Internship', mentor: 'Ms. Afsana', progress: 45, status: 'Pending',
      task: [

        { name: 'API Integration', startDate: '2025-01-21', endDate: '2025-01-30',status: 'Active' }
      ]
    },
    { name: 'Tanvir Ahmed', program: 'Data Science Internship', mentor: 'Dr. Karim', progress: 100, status: 'Completed',
       task: [
        { name: 'Frontend Design', startDate: '2025-01-12', endDate: '2025-01-20',status: 'Active' },

      ]
     },
    { name: 'Rafiq Hasan', program: 'Web Development Internship', mentor: 'Mr. Rahim', progress: 30, status: 'Pending' },
    { name: 'Sadia Akter', program: 'UI/UX Design Internship', mentor: 'Ms. Afsana', progress: 60, status: 'Active' },
    { name: 'Arif Hossain', program: 'Data Science Internship', mentor: 'Dr. Karim', progress: 90, status: 'Active' },
  ];


  openViewModal(student: Student) {
    this.viewStudent = student;
  }

  closeViewModal() {
    this.viewStudent = null;
  }

 
  openTaskModal(student: Student) {
    this.taskStudent = { student, tasks: student.task || [] };
  }

  closeTaskModal() {
    this.taskStudent = null;
  }
}

