import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

const baseUrl = environment.apiSkill;

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private httpClient: HttpClient) { }

  getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`${baseUrl}`);
  }

  getSkill(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(`${baseUrl}${id}`);
  }

  addSkill(skill: Skill): Observable<Skill> {
    return this.httpClient.post<Skill>(`${baseUrl}`, skill);
  }

  updateSkill(id: number, skill: Skill): Observable<Skill> {
    return this.httpClient.put<Skill>(`${baseUrl}${id}`, skill);
  }

  deleteSkill(id: number): Observable<Skill> {
    return this.httpClient.delete<Skill>(`${baseUrl}${id}`);
  }
}
