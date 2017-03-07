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
      text: "Imagine"
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
