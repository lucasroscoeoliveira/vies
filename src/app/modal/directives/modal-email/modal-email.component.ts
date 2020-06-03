import { Component, OnInit, Input } from '@angular/core';
import { Modal } from 'src/app/components-controllers/Modal';
import { ClientAppService } from 'src/app/services/client-app.service';
import { ClientModel } from 'src/app/models/ClientModel';
import { Toast } from 'src/app/components-controllers/Toast';
import { Header } from 'src/app/components-controllers/Header';

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
  logoImage: string
  subscribe: boolean;
  btnColor: string;
  
  constructor(public modal: Modal, public clientAppService: ClientAppService, public toast: Toast, public header: Header) { }

  ngOnInit(): void {
    this.client = new ClientModel();
    this.focusInputName();
    this.setLogoImage();
    this.btnColor = this.getBtnType();
  }

  setLogoImage() {
    this.logoImage = this.header.type === 'header' ? "../../../../assets/imgs/logo-casa-horizontal.png" : "../../../../assets/imgs/logo-moda-horizontal.png"
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
    let from = this.header.type === 'house' ? 'Vies Casa' : 'Viés Negócio';

    let mailData = {
      message: this.message,
      from: from
    }
    this.clientAppService.create(
      this.client,
      mailData
    ).subscribe(
      (res: any) => {
        this.toast.success('Email enviado com sucesso! Em breve retornaremos!');
      },
      (err) => {
        this.toast.error(err.message);
      }
    )
    this.modal.executeCallBack();
  }

  closeModal() {
    this.modal.close();
  }
}
