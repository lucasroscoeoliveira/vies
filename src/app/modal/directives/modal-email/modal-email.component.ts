import { Component, OnInit, Input } from '@angular/core';
import { Modal } from 'src/app/components-controllers/Modal';
import { ClientAppService } from 'src/app/services/client-app.service';
import { ClientModel } from 'src/app/models/ClientModel';
import { Toast } from 'src/app/components-controllers/Toast';
import { Header } from 'src/app/components-controllers/Header';
import Utils from 'src/app/utils/Utils';
import { FacebookService } from 'src/app/facebook.service';
import { Menu } from 'src/app/components-controllers/Menu';

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
  btnColor: string;
  
  constructor(
    public modal: Modal, 
    public clientAppService: ClientAppService, 
    public toast: Toast, 
    public header: Header,
    public facebookService: FacebookService,
    public menu: Menu
    ) { }

  ngOnInit(): void {
    this.client = new ClientModel();
    this.focusInputName();
    this.btnColor = this.getBtnType();
  }

  getBtnType() {
    return this.header.type === 'house' ? 'green' : 'purple';
  }

  focusInputName() {
    if(!this.getIsMobile()){
      document.getElementById("name_input").focus();
    }
  }

  getIsMobile() {
    return screen.width < 900
  }

  sendEmail() {
    const from = this.header.type === 'house' ? 'Vies Casa' : 'Viés Negócio';

    if (!Utils.validateEmail(this.client.Email)) {
      this.toast.error('Por favor, insira um email válido!');
      return;
    }

    this.registerEvent();

    const mailData = {
      message: this.message,
      from
    }
    this.clientAppService.create(
      this.client,
      mailData
    ).subscribe(
      (res: any) => {
        this.toast.success('Email enviado com sucesso! Em breve retornaremos!');
      },
      (err) => {
        this.toast.error(err.error.text);
      }
    )
    this.modal.executeCallBack();
  }

  closeModal() {
    this.modal.close();
  }

  registerEvent() {
    this.facebookService.registerEvent({
      name: 'Email',
      from: this.header.type
    }, 'Contact');
  }
}
