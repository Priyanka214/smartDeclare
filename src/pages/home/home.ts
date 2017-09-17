import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DeclarationPage } from '../declaration/declaration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public years: any[];
  public username: string;
  public age: number;
  public gender: string;
  public email: string;
  public year: string;
  public grossSalary: any;

  constructor(public navCtrl: NavController, public localStorage: Storage) {
    this.initializeFinancialYear();
  }
  initializeFinancialYear(){
    this.years = [
      {id: 1, name: '2015-16'},
      {id: 2, name: '2016-17'},
      {id: 3, name: '2017-18'}
    ];
  }
  goToDeclaration() {
     this.navCtrl.push(DeclarationPage);
     console.log(this.username, this.age, this.gender, this.email, this.year, this.grossSalary);
     this.localStorage.set('username', this.username);
     this.localStorage.set('grossSalary', this.grossSalary);
     this.localStorage.set('age', this.age);
     this.localStorage.set('year', this.year);
     this.localStorage.set('email', this.email);

  }
}
