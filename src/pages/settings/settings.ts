import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CellModel } from '../../components/components';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  cells : CellModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
