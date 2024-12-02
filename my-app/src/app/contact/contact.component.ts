import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from '../service/message/message.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  // Define the form group
  contactForm:FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  }); 

  constructor(private service: MessageService) { }

  submitForm(event: any) {
    this.service.sendMessage(this.contactForm.value).subscribe({
      next: (response:any) => {
        alert('留言成功！我會盡快回覆您！');
      },
      error: (error) => {
        console.error('留言失敗:', error);
        alert('留言失敗！請聯絡系統管理人員！ \n mail:sam-chou@alphaleader.com');
      }
    });
  }
}
