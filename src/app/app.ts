import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button, ButtonModule } from 'primeng/button';
import { Header } from './Components/header/header';
import { Footer } from './Components/footer/footer';
import { SideNav } from './Components/side-nav/side-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideNav, Header, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
})
export class App {
  isNavExpanded: boolean = this.isMobile ? false : true;

  get isMobile(): boolean {
    return window.innerWidth < 1024;
  }

  toggleSidebar(): void {
    this.isNavExpanded = !this.isNavExpanded;
  }
}
