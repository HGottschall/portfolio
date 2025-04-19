import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsData } from '../interfaces/skill.interface';


@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private readonly DB_URL = 'assets/data/skills.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<SkillsData> {
    return this.http.get<SkillsData>(this.DB_URL);
  }


}
