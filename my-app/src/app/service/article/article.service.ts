import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  readlist() {
    // 呼叫api讀取文章列表
    return this.http.get('http://localhost:5000/api/articles');
  }
}
