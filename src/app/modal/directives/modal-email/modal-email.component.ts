import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-email',
  templateUrl: './modal-email.component.html',
  styleUrls: ['./modal-email.component.scss']
})
export class ModalEmailComponent implements OnInit {

  @Input() data: any;
  @Input() callBack: any;

  name: string;
  email: string;
  phone: string;
  message: string;
  subscribe: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  sendEmail() {
    debugger;
  }

}
