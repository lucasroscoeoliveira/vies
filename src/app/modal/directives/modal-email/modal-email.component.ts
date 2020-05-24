import { Component, OnInit, Input } from '@angular/core';
import { Modal } from 'src/app/components-controllers/Modal';
import { ClientAppService } from 'src/app/services/client-app.service';
import { ClientModel } from 'src/app/models/ClientModel';
import { Toast } from 'src/app/components-controllers/Toast';

@Component({
  selector: 'app-modal-email',
  templateUrl: './modal-email.component.html',
  styleUrls: ['./modal-email.component.scss']
})
export class ModalEmailComponent implements OnInit {

  @Input() data: any;
  @Input() callBack: any;

  client: ClientModel;
  message: string;
  subscribe: boolean;
  
  constructor(public modal: Modal, public clientAppService: ClientAppService, public toast: Toast) { }

  ngOnInit(): void {
    this.client = new ClientModel();
    this.focusInputName();
  }

  focusInputName() {
    document.getElementById("name_input").focus();
  }

  sendEmail() {
    this.clientAppService.create(
      this.client,
      this.message
    ).subscribe(
      (res: any) => {
        this.toast.success('Email enviado com sucesso! Em breve retornaremos!');
      },
      (err) => {
        this.toast.error('Tivemos um problema! Tente novamente.');
      }
    )
    this.modal.executeCallBack();
  }

  closeModal() {
    this.modal.close();
  }
}
