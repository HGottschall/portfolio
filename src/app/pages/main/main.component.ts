import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { AboutMeComponent } from '../../shared/components/about-me/about-me.component';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { ContactComponent } from "../../shared/components/contact/contact.component";
import { SkillsComponent } from "../../shared/components/skills/skills.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, BannerComponent, AboutMeComponent, SkillsComponent, ContactComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {
  backgroundUrl = "https://4kwallpapers.com/images/wallpapers/valley-landscape-aesthetic-mountains-gradient-background-6318x2633-4589.jpg"
  profileUrl = "assets/images/me.jpg"

  constructor(private zone: NgZone) { }

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              // Manda evento pro navbar
              window.dispatchEvent(new CustomEvent('sectionChange', { detail: id }));
            }
          }
        }
      },
      { threshold: 0.6 } // % visível pra considerar como "ativa"
    );

    sections.forEach((section) => observer.observe(section));
  }
}
