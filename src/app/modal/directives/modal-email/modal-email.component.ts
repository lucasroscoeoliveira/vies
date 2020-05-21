import { Component, OnInit, Input } from '@angular/core';
import { Modal } from 'src/app/components-controllers/Modal';
import { ClientAppService } from 'src/app/services/client-app.service';
import { ClientModel } from 'src/app/models/ClientModel';

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
  
  constructor(public modal: Modal, public clientAppService: ClientAppService) { }

  ngOnInit(): void {
    this.client = new ClientModel();
    this.focusInputName();
    this.teste();
  }

  focusInputName() {
    document.getElementById("name_input").focus();
  }

  teste() {
    this.clientAppService.get().subscribe(
      (res: any) => {
        debugger;
        console.log('Criar um UI-ALERT');
      },
      (err) => {
        console.log('Criar um UI-ALERT');
      }
    )
  }

  sendEmail() {
    this.clientAppService.create(
      this.client,
      this.message
    ).subscribe(
      (res: any) => {
        console.log('Criar um UI-ALERT');
      },
      (err) => {
        console.log('Criar um UI-ALERT');
      }
    )
    this.modal.executeCallBack();
  }

  closeModal() {
    this.modal.close();
  }
}
