import { Component } from '@angular/core';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab:InAppBrowser) {
    const options : InAppBrowserOptions = {
      location : 'no', 
      toolbar : 'no',
      zoom : 'no'
    };
  this.iab.create('http://demo.digit9.co.in/porse/public/login','_self',options);
  }

  
}
