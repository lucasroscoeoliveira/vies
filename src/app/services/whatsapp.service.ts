import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WhatsappService {

  api: string

  constructor(private http: HttpClient) { 
    this.api = 'https://api.whatsapp.com/send?phone=';
  }

  sendMessage(number: number) {
    debugger;
    window.open(`${this.api}/${number}`);
  }
}
