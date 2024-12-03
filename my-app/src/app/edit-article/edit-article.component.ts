import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticleService } from '../service/article/article.service';

@Component({
  selector: 'app-edit-article',
  imports: [FormsModule],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css'
})
export class EditArticleComponent {

  title: string = '';
  content: string = '';

  constructor(private service:ArticleService) { }

  submitForm(event: any) {

    // 獲取圖片內容
    let picture:any = document.getElementById('picture');
    const file = picture.files[0];

    // const file = this.picture.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('title', this.title);
    formData.append('content', this.content);

    // 驗證表單資料
    if (!this.title || !this.content) {
      alert('主旨與內容皆為必填');
      return;
    }

    // 呼叫api新增文章
    this.service.createArticle(formData).subscribe({
      next: (response:any) => {
        alert('新增文章成功');
        this.title = '';
        this.content = '';
      },
      error: (error) => {
        alert(`新增文章失敗:${error}`);
      }
    });

  }
}
