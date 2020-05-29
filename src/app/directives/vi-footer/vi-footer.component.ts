import { Component, OnInit, Input } from '@angular/core';
import { Social } from 'src/app/components-controllers/Social';

@Component({
  selector: 'app-vi-footer',
  templateUrl: './vi-footer.component.html',
  styleUrls: ['./vi-footer.component.scss']
})
export class ViFooterComponent implements OnInit {

  email: string;
  socials: any;

  @Input() type: string;

  constructor(
    public social: Social
  ) { }

  ngOnInit(): void {
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

  }
}
