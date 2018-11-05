import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WatchingListPage } from './watching-list';

@NgModule({
  declarations: [
    WatchingListPage,
  ],
  imports: [
    IonicPageModule.forChild(WatchingListPage),
  ],
})
export class WatchingListPageModule {}
