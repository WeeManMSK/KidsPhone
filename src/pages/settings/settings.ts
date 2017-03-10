import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CellModel } from '../../components/components';
import { CellEditPage } from '../pages';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  cells: CellModel[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
  }

  ionViewWillEnter() {
    this.loadCells();
  }

  loadCells() {
    this.cells = [];
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this.storage.forEach((cell: CellModel, key: string) => {
      this.cells.push(cell);
    })
    loader.dismiss();
  }

  onEditClick(id: number) {
    this.navCtrl.push(CellEditPage, id);
  }

  onAddClick() {
    this.navCtrl.push(CellEditPage);
  }
}
