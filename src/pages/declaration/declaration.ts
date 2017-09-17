import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ModalController, NavParams } from 'ionic-angular';
//import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { IncomeTaxPage } from '../incometax/incometax';
import { Profile } from '../declaration/profile';
import { Constants } from '../declaration/constants';
//import { SegmentPage } from '../declaration/segment';

@Component({
  selector: 'page-declaration',
  providers: [ Constants ],
  templateUrl: 'declaration.html'
})
export class DeclarationPage {
  input80C: any = 0;
  input80CCD: any = 0;
  input80TTA:  any = 0;
  input80GG:  any = 0;
  input80E:  any = 0;
  input80EE:  any = 0;
  input80D:  any = 0;
  input80DD:  any = 0;
  input80DDB:  any = 0;
  input80U:  any = 0;
  input80GGB:  any = 0;
  input80GGC:  any = 0;
  input80RRB:  any = 0;
  public totalInvestment:  any = 0;
  public inputAge: number = 0;
  public inputSalary: number = 0;
  public exemptionLimit: number = 0;
  public taxableIncomeBfDeclare: any = 0;
  public taxBfDeclare: any = 0;
  public finaltaxBfDeclare: any = 0;
  public taxableIncomeAfDeclare: any = 0;
  public taxAfDeclare: any = 0;
  public finaltaxAfDeclare: any = 0;
  public calculatedTax: any = 0;
  public balanceTaxAmount: any = 0;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public localStorage: Storage, public modalCtrl: ModalController, public constant: Constants) {

  }
  present80CModal() {
   let profileModal = this.modalCtrl.create(Profile, { schemeName: this.constant.MODAL_TITLE_80C, schemeDetails: this.constant.MODAL_DETAILS_80C});
   profileModal.present();
 }
 present80CCDModal() {
  let profileModal = this.modalCtrl.create(Profile, { schemeName: this.constant.MODAL_TITLE_80CCD, schemeDetails: this.constant.MODAL_DETAILS_80CCD});
  profileModal.present();
}
present80TTAModal() {
 let profileModal = this.modalCtrl.create(Profile, { schemeName: this.constant.MODAL_TITLE_80TTA, schemeDetails: this.constant.MODAL_DETAILS_80TTA});
 profileModal.present();
}
present80GGModal() {
 let profileModal = this.modalCtrl.create(Profile, { schemeName: this.constant.MODAL_TITLE_80GG, schemeDetails: this.constant.MODAL_DETAILS_80GG});
 profileModal.present();
}
present80EModal() {
 let profileModal = this.modalCtrl.create(Profile, { schemeName: this.constant.MODAL_TITLE_80E, schemeDetails: this.constant.MODAL_DETAILS_80E});
 profileModal.present();
}
present80EEModal() {
 let profileModal = this.modalCtrl.create(Profile, { schemeName: this.constant.MODAL_TITLE_80EE, schemeDetails: this.constant.MODAL_DETAILS_80EE});
 profileModal.present();
}
present80DModal() {
 let profileModal = this.modalCtrl.create(Profile, { schemeName: this.constant.MODAL_TITLE_80D, schemeDetails: this.constant.MODAL_DETAILS_80D});
 profileModal.present();
}
present80DDModal() {
 let profileModal = this.modalCtrl.create(Profile, { schemeName: this.constant.MODAL_TITLE_80DD, schemeDetails: this.constant.MODAL_DETAILS_80DD});
 profileModal.present();
}
present80DDBModal() {
 let profileModal = this.modalCtrl.create(Profile, { schemeName: this.constant.MODAL_TITLE_80DDB, schemeDetails: this.constant.MODAL_DETAILS_80DDB});
 profileModal.present();
}
present80UModal() {
 let profileModal = this.modalCtrl.create(Profile, { schemeName: this.constant.MODAL_TITLE_80U, schemeDetails: this.constant.MODAL_DETAILS_80U});
 profileModal.present();
}
present80GGBModal() {
 let profileModal = this.modalCtrl.create(Profile, { schemeName: this.constant.MODAL_TITLE_80GGB, schemeDetails: this.constant.MODAL_DETAILS_80GGB});
 profileModal.present();
}
present80GGCModal() {
 let profileModal = this.modalCtrl.create(Profile, { schemeName: this.constant.MODAL_TITLE_80GGC, schemeDetails: this.constant.MODAL_DETAILS_80GGC});
 profileModal.present();
}
present80RRBModal() {
 let profileModal = this.modalCtrl.create(Profile, { schemeName: this.constant.MODAL_TITLE_80RRB, schemeDetails: this.constant.MODAL_DETAILS_80RRB});
 profileModal.present();
}
showAlert() {
let alert = this.alertCtrl.create({
      title: '80C Details',
      subTitle: '80C includes PPF(Public Provident Fund), PF(Provident Fund), ELSS(Equity Linked Savings Scheme), FD(Fixed Deposits), NSE(National Saving Scheme)',
      buttons: ['OK'],
      });
    alert.present();
  }

  goToIncomeTax() {
    console.log(this.input80C, this.input80CCD, this.input80TTA, this.input80GG, this.input80E, this.input80EE, this.input80D, this.input80DD,this.input80DDB, this.input80U, this.input80GGB, this.input80GGC, this.input80RRB);
    this.calTotalInvestment();
    this.getinputAge();

    this.navCtrl.push(IncomeTaxPage);
  }
  getinputAge() {
    this.localStorage.get('age').then((val) => {
    console.log("age in declare:" + val);
    this.inputAge = val;
    this.calTaxableIncome();
  //  this.exemptionLimit = this.calExemptionLimit(this.inputAge);
  //  console.log("Exemption Limit: " + this.exemptionLimit);
    })

  }
  calTotalInvestment(): void {
    this.totalInvestment = (parseInt(this.input80C) + parseInt(this.input80CCD) + parseInt(this.input80TTA)+ parseInt(this.input80GG) + parseInt(this.input80E) +  parseInt(this.input80EE) + parseInt(this.input80D) + parseInt(this.input80DD) + parseInt(this.input80DDB) + parseInt(this.input80U) + parseInt(this.input80GGB) + parseInt(this.input80GGC) + parseInt(this.input80RRB));
    console.log(this.totalInvestment);
    this.localStorage.set('totalInvestment', this.totalInvestment);
  }
   calExemptionLimit(age: number): number{
    if(age < 60) {
        this.exemptionLimit = 250000;
    }
    else if(age >=60 && age < 80) {
        this.exemptionLimit = 300000;
    }
    else {
        this.exemptionLimit = 500000;
    }
    return this.exemptionLimit;
  }
  calTaxableIncome(): void {
    this.exemptionLimit = this.calExemptionLimit(this.inputAge);
    this.localStorage.get('grossSalary').then((val) => {
    console.log("gross salary in declare:" + val);
    this.inputSalary = val;
    this.taxableIncomeBfDeclare = this.inputSalary - this.exemptionLimit;
    console.log("taxableIncomeBfDeclare " + this.taxableIncomeBfDeclare);
    this.taxBfDeclare = this.calcaluteTax(this.taxableIncomeBfDeclare);
    console.log("taxBfDeclare " + this.taxBfDeclare);
    this.finaltaxBfDeclare = this.taxBfDeclare + ((this.taxBfDeclare * 3) / 100);
    console.log("finaltaxBfDeclare " + this.finaltaxBfDeclare);
    this.localStorage.set('finaltaxBfDeclare', this.finaltaxBfDeclare);

    this.taxableIncomeAfDeclare = this.inputSalary - this.exemptionLimit - this.totalInvestment;
    console.log("taxableIncomeAfDeclare " + this.taxableIncomeAfDeclare);
    this.taxAfDeclare = this.calcaluteTax(this.taxableIncomeAfDeclare);
    console.log("taxAfDeclare " + this.taxAfDeclare);
    this.finaltaxAfDeclare = this.taxAfDeclare + ((this.taxAfDeclare * 3) / 100);
    console.log("finaltaxAfDeclare " + this.finaltaxAfDeclare);
    this.localStorage.set('finaltaxAfDeclare', this.finaltaxAfDeclare);
  })
  }

  calcaluteTax(taxableIncome: number): number {
      if(taxableIncome < 500000 ) {
          this.calculatedTax = (taxableIncome * 5) / 100;
      }
      else if(taxableIncome > 500000 && taxableIncome < 1000000) {
          this.balanceTaxAmount = taxableIncome - 500000 ;
          this.calculatedTax = 25000 + ((this.balanceTaxAmount * 20) /100);
      }
      else if(taxableIncome > 1000000) {
          this.balanceTaxAmount = taxableIncome - 1000000;
          this.calculatedTax = 100000 +  ((this.balanceTaxAmount * 30) / 100);
      }
      return this.calculatedTax;
  }
}
