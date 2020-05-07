import { Component, OnInit, Input } from '@angular/core';
import { Modal } from 'src/app/components-controllers/Modal';

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
  
  constructor(public modal: Modal) { }

  ngOnInit(): void {
    this.focusInputName();
  }

  focusInputName() {
    document.getElementById("name_input").focus();
  }

  sendEmail() {
    this.modal.executeCallBack();
  }

  closeModal() {
    this.modal.close();
  }
}
