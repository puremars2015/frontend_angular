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
    console.log('Form submitted');
    this.service.sendMessage(this.contactForm.value);
  }
}
