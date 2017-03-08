import { Component, Input } from '@angular/core';
import { CellModel } from './cell.model';
// import { StreamingMedia, StreamingAudioOptions, NativeAudio } from 'ionic-native';

@Component({
  selector: 'cell',
  templateUrl: 'cell.html'
})
export class CellComponent {
  @Input() model: CellModel;

  constructor() {  }

  // options : StreamingAudioOptions = {
  //   initFullscreen: false
  // }

  onTap($event: Event): void {
    console.log('tap');
    //StreamingMedia.playAudio(this.model.audioUrl, this.options);
    // NativeAudio.preloadComplex('music', this.model.audioUrl, 1, 1, 1)
    // .then((msg)=>{
    //   console.log(msg);
    // });
  }
}
