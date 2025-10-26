import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true,
})
export class Header {
  @Input() isNavExpanded = false;
  @Output() toggleNav = new EventEmitter<void>();

  // This would be passed in from parent

  toggleSidebar() {
    this.toggleNav.emit();
  }
}
