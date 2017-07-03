import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {SharedModule} from '../shared/shared.module';
import {SearchRoutingModule} from './search-routing.module';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HttpModule,
        SearchRoutingModule
    ],
    declarations: [SearchComponent]
})
export class SearchModule {
}
