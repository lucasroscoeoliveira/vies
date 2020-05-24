import { Component, OnInit, Input } from '@angular/core';
import { Toast } from 'src/app/components-controllers/Toast';

@Component({
  selector: 'app-vi-toast',
  templateUrl: './vi-toast.component.html',
  styleUrls: ['./vi-toast.component.scss']
})
export class ViToastComponent implements OnInit {

  @Input() toast: Toast;

  constructor() { }

  ngOnInit(): void {
    if(!this.toast){
      this.toast = new Toast();
    }
  }

  setIsMobile() {
    return screen.width < 900
  }

}
