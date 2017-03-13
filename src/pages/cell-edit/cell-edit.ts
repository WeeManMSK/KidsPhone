import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CellModel } from '../../components/components';
import { ImageEditorPage, MusicEditorPage } from '../pages';
import * as uuid from 'uuid/v1';

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
      this.storage.get(this.navParams.data)
        .then((cell) => {
          this.model = cell;
        })
    } else {
      this.title = "Add cell";
      this.model = new CellModel();
    }
  }

  private paramsExist(): boolean {
    return typeof (this.navParams.data) === "string";
  }

  ionViewDidLoad() {
  }

  onSaveClick(form: FormControl) {
    if (form.invalid) return;
    this.storage.length()
      .then((l) => {
        if (!this.model.id) {
          this.model.id = uuid();
        }
        this.storage.set(this.model.id.toString(), this.model);
        this.navCtrl.pop();
      })
  }

  onRemoveClick() {
    this.storage.remove(this.model.id.toString())
      .then(() => {
        this.navCtrl.pop();
      });
  }

  onImageButtonClick() {
    this.navCtrl.push(ImageEditorPage, this.model.id);
  }

  onMusicButtonClick() {
    this.navCtrl.push(MusicEditorPage, this.model.id);
  }
}
