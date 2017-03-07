import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CellModel } from '../../components/components';

/*
  Generated class for the Board page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-board',
  templateUrl: 'board.html'
})
export class BoardPage {

  cells : CellModel[] = [
    {
      text: "Imagine",
      audioUrl: "http://storage.mp3.cc/download/16324940/WE1lTlF1SGlvY0grYmRqZFNSa0tGaitqOW9Ba2h2cDZSRmlPTGFubzNLc2JtcmxkSk05Z1cxWnd1bmxwckxEQ3M5ODNwU2wvQ2IxZHQ0MUIvbHliN2pPK05PNEFtRisxYzdHWEt4bWw2dmZwcFFOc0x1V1ZjRTdaNDBKbnR0Tzg/dzhon-lennon-imagine-predstav-sebe_(mp3.cc).mp3",
    },
    {
      text: "Girl"
    },
    {
      text: "Yesterday"
    },
    {
      text: "Working Class Hero"
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoardPage');
  }

}
