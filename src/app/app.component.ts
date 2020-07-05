import { Component, OnInit } from '@angular/core';
import { Toast } from './components-controllers/Toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vies';
  operationSystem: string;

  constructor(public toast: Toast) { }

  ngOnInit(): void {
    this.operationSystem = this.getMobileOperatingSystem();
  }

  getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor;
  
        // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
          return "Windows Phone";
      }
  
      if (/android/i.test(userAgent)) {
          return "Android";
      }
  
      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return "iOS";
      }
  
      return "unknown";
  }
}
