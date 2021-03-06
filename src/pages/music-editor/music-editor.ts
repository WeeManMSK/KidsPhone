import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CellModel } from '../../components/components';
import { FileChooser } from 'ionic-native';

@Component({
  selector: 'page-music-editor',
  templateUrl: 'music-editor.html'
})
export class MusicEditorPage {

  model: CellModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get(this.navParams.data)
      .then((cell) => {
        this.model = cell;
      })
  }

  ionViewDidLoad() {
  }

  onOpenFileClick() {
    FileChooser.open()
      .then((uri) => {
        this.model.audioUrl = uri;
      });
  }

  onSaveButtonClick() {
    this.storage.set(this.model.id.toString(), this.model);
    this.navCtrl.pop();
  }

}
