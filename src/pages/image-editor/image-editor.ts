import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CellModel } from '../../components/components';

@Component({
  selector: 'page-image-editor',
  templateUrl: 'image-editor.html'
})
export class ImageEditorPage {

model: CellModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get(this.navParams.data)
        .then((cell) => {
          this.model = cell;
        })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageEditorPage');
  }

}
