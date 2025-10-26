import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { NavItem } from '../nav-item/nav-item';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-side-nav',
  imports: [NavItem, CommonModule, ButtonModule, ButtonModule],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.css',
  standalone: true,
})
export class SideNav {
  @Input() isNavExpanded: boolean = true;
  @Input() isMobile: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  protected readonly title = signal('dapplesoft-eintern');
  sidebarVisible = signal(true);
  get navWidth(): number {
    return this.isNavExpanded ? 16 : 0;
  }

  onToggleClick(): void {
    this.toggle.emit();
  }
}
