import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CellModel } from '../../components/components';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-board',
  templateUrl: 'board.html'
})
export class BoardPage {

  cells: CellModel[] = [];

  //http://storage.mp3.cc/download/16324940/WE1lTlF1SGlvY0grYmRqZFNSa0tGaitqOW9Ba2h2cDZSRmlPTGFubzNLc2JtcmxkSk05Z1cxWnd1bmxwckxEQ3M5ODNwU2wvQ2IxZHQ0MUIvbHliN2pPK05PNEFtRisxYzdHWEt4bWw2dmZwcFFOc0x1V1ZjRTdaNDBKbnR0Tzg/dzhon-lennon-imagine-predstav-sebe_(mp3.cc).mp3

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.getCells();
  }

  ionViewDidLoad() { }

  getCells() {
    this.cells = [];
    this.storage.forEach((value) => {
      this.cells.push(value);
    })
  }

}
