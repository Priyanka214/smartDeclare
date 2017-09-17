import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//import { RoundPipe } from './roundpipe';

@Component({
  selector: 'page-incometax',
  templateUrl: 'incometax.html'
})
export class IncomeTaxPage {
  username: string;
  grossIncome: number;
  email: string;
  totalInvest: any;
  taxBeforeDeclare: any;
  taxAfterDeclare: any;
  constructor(public navCtrl: NavController, public localStorage: Storage) {
  this.localStorage.get('grossSalary').then((val) => {
  console.log("gross sal in declare:" + val);
  this.grossIncome = val;
  })
  this.localStorage.get('totalInvestment').then((val) => {
  console.log("totalInvestmentin declare:" + val);
  this.totalInvest = val;

  })

  this.localStorage.get('username').then((val) => {
  console.log("username in declare:" + val);
  this.username = val;
})


  this.localStorage.get('email').then((val) => {
  console.log("email in declare:" + val);
  this.email = val;
})

this.localStorage.get('finaltaxBfDeclare').then((val) => {
console.log("finaltaxBfDeclare in declare:" + val);
this.taxBeforeDeclare = val;
})

this.localStorage.get('finaltaxAfDeclare').then((val) => {
console.log("finaltaxAfDeclare in declare:" + val);
this.taxAfterDeclare = val;
})

  }

}
