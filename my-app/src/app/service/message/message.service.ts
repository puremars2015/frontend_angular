import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  sendMessage(message: any) {
    // 呼叫api送出訊息
    console.log('Message sent:', message);
    return this.http.post('http://localhost:5000/api/new_message', message);
  }

}
