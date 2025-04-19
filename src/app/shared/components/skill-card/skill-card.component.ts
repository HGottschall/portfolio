import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Skill } from '../../interfaces/skill.interface';

@Component({
  selector: 'app-skills-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillsCardComponent {
  @Input() title = '';
  @Input() skills: Skill[] = [];
  @Input() buttonText = 'Me Contrate!';
}
