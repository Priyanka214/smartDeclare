import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {
  schemeName: any;
  schemeDetails: any;
  constructor(public params: NavParams, public viewCtrl: ViewController) {
  //  console.log('schemeDetails', params.get('schemeDetails'));
  //  console.log('schemeName', params.get('schemeName'));
    this.schemeName =  params.get('schemeName');
    this.schemeDetails = params.get('schemeDetails');
    }
    closeModal() {
    this.viewCtrl.dismiss();
  }
}
