import { Component, OnInit, Input } from '@angular/core';
import { Social } from 'src/app/components-controllers/Social';
import { ClientModel } from 'src/app/models/ClientModel';
import { ClientAppService } from 'src/app/services/client-app.service';
import { Toast } from 'src/app/components-controllers/Toast';
import { Header } from 'src/app/components-controllers/Header';

@Component({
  selector: 'app-vi-footer',
  templateUrl: './vi-footer.component.html',
  styleUrls: ['./vi-footer.component.scss']
})
export class ViFooterComponent implements OnInit {

  email: string;
  socials: any;
  client: ClientModel;

  constructor(
    public social: Social,
    public clientAppService: ClientAppService,
    public toast: Toast,
    public header: Header
  ) { }

  ngOnInit(): void {
    this.client = new ClientModel();
    this.client.Name = "Sem nome";
    this.client.Subscribe = true;
    this.socials = [
      {
        name: "icon-facebook",
        clickEvent: this.social.goToFacebook
      },
      {
        name: "icon-instagram",
        clickEvent: this.social.goToInstagram
      },
      {
        name: "icon-pinterest",
        clickEvent: this.social.goToPinterest
      },
      {
        name: "icon-linkedin2",
        clickEvent: this.social.goToLinkedin
      },
      {
        name: "icon-youtube",
        clickEvent: this.social.goToYoutube
      },
    ]
  }

  sendEmail() {
    let mailData = {
      message: "Gostaria de receber a NewsLetter da Vies Design",
      from: 'Vies Casa'
    }
    this.clientAppService.create(
      this.client,
      mailData
    ).subscribe(
      (res: any) => {
        this.toast.success('Email enviado com sucesso! A partir de agora você irá receber as novidades da Viés!', 4);
      },
      (err) => {
        this.toast.error(err.error.text);
      }
    )
  }
}
