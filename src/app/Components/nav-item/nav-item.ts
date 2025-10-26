import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  imports: [CommonModule],
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.css',
})
export class NavItem {
  @Input() icon: string = 'pi pi-user';
  @Input() label: string = '';
  @Input() link: string = '#';
  //@Input() collapsed: boolean = false;
}
