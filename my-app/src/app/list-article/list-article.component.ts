import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article/article.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-article',
  imports: [CommonModule],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class ListArticleComponent implements OnInit {
  __articles = [
      {
          "img_url": "B0B0B0.png",
          "title": "no article",
          "content": "no article",
          "link": "#",
          "link_color": "purple"
      },
      {
          "img_url": "B0B0B0.png",
          "title": "no article",
          "content": "no article",
          "link": "#",
          "link_color": "blue"
      },
              {
          "img_url": "B0B0B0.png",
          "title": "no article",
          "content": "no article",
          "link": "#",
          "link_color": "pink"
      }
  ];

  get articles() {
    // 根据当前页码返回对应的文章列表
    const start = (this.currentPage - 1) * 10;
    const end = start + 10;
    return this.__articles.slice(start, end);
  }

  get pageNumbers() {
    // 根据当前页生成动态页码数组 (例如显示 5 页)
    const range = 2; // 当前页前后显示页数范围
    const start = Math.max(1, this.currentPage - range);
    const end = Math.min(this.totalPages, this.currentPage + range);

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push({ number: i, current: i === this.currentPage });
    }
    return pages;
  }

  currentPage: number = 1; // 当前页
  totalPages: number = 10; // 总页数

  constructor(private service: ArticleService) { }

  ngOnInit() {
    // 呼叫api讀取文章列表
    this.service.readlist().subscribe({
      next: (response:any) => {

        // 設定總頁數
        this.totalPages = Math.ceil(response.articles.length / 10);

        this.__articles = response.articles;
      },
      error: (error) => {
        console.error('讀取文章列表失敗:', error);
      }
    });
  }

  changePage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
    }
  }
}
