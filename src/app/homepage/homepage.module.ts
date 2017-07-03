/**
 * Created by vaz on 5/9/17.
 */


import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from './homepage/homepage.component';
import {TrendingListComponent} from './trending-list/trending-list.component';
import {TrendingItemComponent} from './trending-item/trending-item.component';
import {ContentRateComponent} from './content-rate/content-rate.component';
import {ContentReportComponent} from './content-report/content-report.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
    declarations: [
        HomepageComponent,
        TrendingListComponent,
        TrendingItemComponent,
        ContentRateComponent,
        ContentReportComponent
    ],
    entryComponents: [ContentReportComponent],
    imports: [SharedModule, CommonModule, AppRoutingModule]
})
export class HomepageModule {
}
