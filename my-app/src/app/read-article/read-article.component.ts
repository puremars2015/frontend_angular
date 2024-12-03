import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-article',
  imports: [],
  templateUrl: './read-article.component.html',
  styleUrl: './read-article.component.css'
})
export class ReadArticleComponent implements OnInit {

  title: string = '';
  content: string = '';
  img_url: string = '';

  constructor(private service:ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // 從url取得文章id
    let id = this.route.snapshot.paramMap.get('id')

    if (!id) {
      alert('文章id不存在');
    }
    else {
      this.service.readArticle(id).subscribe({
        next: (response:any) => {
          // 將文章資料寫入畫面
          this.title = response.article.title;
          this.content = response.article.content;
          this.img_url = response.article.img_url;
        },
        error: (error) => {
          alert(`讀取文章失敗:${error}`);
        }
      }); // 呼叫api讀取文章
    }

  }

}
