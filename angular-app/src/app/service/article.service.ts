import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  readonly APIUrl = 'http://192.168.188.3/api';
  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(this.APIUrl + '/articles');
  }

  getComments(id: any) {
    return this.http.get(this.APIUrl + '/articles/' + id)
  }

  postComments(id: any, content: any) {
    return this.http.post(this.APIUrl + '/comments/' + id + '/comments', content)
  }

  postArticle(content: any) {
    return this.http.post(this.APIUrl + '/articles', content)
  }
}
