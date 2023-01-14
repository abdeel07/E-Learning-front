import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

const baseUrl = environment.apiCategory;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${baseUrl}`);
  }

  getByTitle(title : string): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${baseUrl}?title=${title}`);
  }

  addCategory(category : Category): Observable<Category> {
    return this.httpClient.post<Category>(`${baseUrl}`, category);
  }
  
  updateCategory(id : number, category : Category): Observable<Category> {
    return this.httpClient.put<Category>(`${baseUrl}${id}`, category);
  }

  deleteCategory(id : number): Observable<any> {
    return this.httpClient.delete<any>(`${baseUrl}${id}`);
  }
}
