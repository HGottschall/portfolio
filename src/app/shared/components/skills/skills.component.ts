import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Skill } from '../../interfaces/skill.interface';
import { AboutService } from '../../services/about.service';
import { SkillsCardComponent } from '../skill-card/skill-card.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillsCardComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  loading = true;

  skillsFront: Skill[] = [];
  skillsBack: Skill[] = [];
  skillsTools: Skill[] = [];
  skillsLanguages: Skill[] = [];

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getAll().subscribe(db => {
      this.skillsFront = db.skillsFront;
      this.skillsBack = db.skillsBack;
      this.skillsTools = db.skillsTools;
      this.skillsLanguages = db.skillsLanguages;
    })

    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
