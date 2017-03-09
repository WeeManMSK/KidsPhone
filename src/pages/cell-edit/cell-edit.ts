import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  onFormSubmit(form: FormControl) {
    if (form.invalid) return;
    this.storage.length()
      .then((l) => {
        let cellsCount = l;
        if (!this.model.id) {
          this.model.id = cellsCount + 1;
        }
        this.storage.set(this.model.id.toString(), this.model);
      })
  }
}
