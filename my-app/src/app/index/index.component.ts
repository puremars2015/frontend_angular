import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article/article.service';

@Component({
  selector: 'app-index',
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {

  articles = [
      {
          "image": "B0B0B0.png",
          "title": "no article",
          "content": "no article",
          "link": "#",
          "link_color": "purple"
      },
      {
          "image": "B0B0B0.png",
          "title": "no article",
          "content": "no article",
          "link": "#",
          "link_color": "blue"
      },
              {
          "image": "B0B0B0.png",
          "title": "no article",
          "content": "no article",
          "link": "#",
          "link_color": "pink"
      }
  ];

  constructor(private service: ArticleService) { }

  ngOnInit() {
    // 呼叫api讀取文章列表
    this.service.readlist().subscribe({
      next: (response:any) => {
        this.articles = response.articles;
        // 只取前六筆文章
        this.articles = this.articles.slice(0, 6);
      },
      error: (error) => {
        console.error('讀取文章列表失敗:', error);
      }
    });
  }
}
