import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CellModel } from '../../components/components';

@Component({
  selector: 'page-cell-edit',
  templateUrl: 'cell-edit.html'
})
export class CellEditPage {

  title: String;
  model: CellModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    if (this.paramsExist()) {
      this.title = "Edit cell";
    } else {
      this.title = "Add cell";
      this.model = new CellModel();
    }
  }

  private paramsExist(): boolean {
    return !isNaN(Number.parseInt(this.navParams.data));
  }

  ionViewDidLoad() {

  }

  onSaveClick() {

  }
}
