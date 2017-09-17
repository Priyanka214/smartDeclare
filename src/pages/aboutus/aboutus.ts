import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html'
})
export class AboutusPage {

  constructor(public navCtrl: NavController) {
  }
  goToHome() {
     this.navCtrl.push(HomePage);
  }
}
