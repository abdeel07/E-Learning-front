import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from 'app/main/e_learning/model/comment';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

const baseUrl = environment.apiComment;

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getComments(id: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${baseUrl}byCours/${id}`);
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(`${baseUrl}`, comment);
  }

  getCount(): Observable<number> {
    return this.httpClient.get<number>(`${baseUrl}total`);
  }

  getPositive(): Observable<number> {
    return this.httpClient.get<number>(`${baseUrl}possitive`);
  }

  getNegative(): Observable<number> {
    return this.httpClient.get<number>(`${baseUrl}negative`);
  }

  getCoursP(id: number): Observable<number>{
    return this.httpClient.get<number>(`${baseUrl}possitive/${id}`);
  }

  getCoursN(id: number): Observable<number>{
    return this.httpClient.get<number>(`${baseUrl}negative/${id}`);
  }
}
