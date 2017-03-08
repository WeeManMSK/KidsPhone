import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BoardPage, SettingsPage, AboutPage, CellEditPage } from '../pages/pages';
import { CellComponent } from '../components/components';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    BoardPage,
    SettingsPage,
    AboutPage,
    CellComponent,
    CellEditPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BoardPage,
    SettingsPage,
    AboutPage,
    CellEditPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, Storage]
})
export class AppModule { }
