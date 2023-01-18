import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Cours } from '../model/cours';

const baseUrl = environment.apiCours;

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private httpClient: HttpClient) { }

  getCourses(id: number): Observable<Cours[]> {
    return this.httpClient.get<Cours[]>(`${baseUrl}?category=${id}`);
  }

  getByTitle(title: string): Observable<Cours[]> {
    return this.httpClient.get<Cours[]>(`${baseUrl}courBytitle/${title}`);
  }

  getCours(id: number): Observable<Cours>{
    return this.httpClient.get<Cours>(`${baseUrl}${id}`);
  }

  addCourse(course: Cours): Observable<Cours> {
    return this.httpClient.post<Cours>(`${baseUrl}`, course);
  }

  updateCourse(id: number, course: Cours): Observable<Cours> {
    return this.httpClient.put<Cours>(`${baseUrl}${id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${baseUrl}${id}`);
  }

  getCount(): Observable<number>{
    return this.httpClient.get<number>(`${baseUrl}total`);
  }
}
