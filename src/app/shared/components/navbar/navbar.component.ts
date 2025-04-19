import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDark = false;
  logoImage = 'assets/images/me.jpg';
  activeSection = 'inicio';

  constructor(private renderer: Renderer2) { }


  setActiveSection(section: string) {
    this.activeSection = section;
  }

  ngOnInit() {
    const theme = localStorage.getItem('theme');
    this.isDark = theme === 'dark';
    this.updateHtmlClass();

    window.addEventListener('sectionChange', (e: any) => {
      this.activeSection = e.detail;
    });
  }

  private updateHtmlClass() {
    const root = document.documentElement;
    if (this.isDark) {
      this.renderer.addClass(root, 'dark');
    } else {
      this.renderer.removeClass(root, 'dark');
    }
  }
}
