import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CellModel } from '../../components/components';
import { CellEditPage } from '../pages';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  cells: CellModel[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    // storage.ready()
    //   .then(() => {
    //     this.loadCells();
    //   });
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
    this.storage.forEach((cell: CellModel, key: string) => {
      console.log(cell);
      this.cells.push(cell);
    })
  }

  onEditClick(id: number) {
    this.navCtrl.push(CellEditPage, id);
  }

  onAddClick() {
    this.navCtrl.push(CellEditPage);
  }
}
