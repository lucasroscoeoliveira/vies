import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vi-footer',
  templateUrl: './vi-footer.component.html',
  styleUrls: ['./vi-footer.component.scss']
})
export class ViFooterComponent implements OnInit {

  email: string;
  socials: any;

  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
    this.socials = [
      {
        name: "icon-facebook"
      },
      {
        name: "icon-instagram"
      },
      {
        name: "icon-pinterest"
      },
      {
        name: "icon-linkedin2"
      },
      {
        name: "icon-youtube"
      },
    ]
  }

  sendEmail() {

  }
}
