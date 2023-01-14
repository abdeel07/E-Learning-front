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
    return this.httpClient.get<Comment[]>(`${baseUrl}?cours=${id}`);
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(`${baseUrl}`, comment);
  }
}
