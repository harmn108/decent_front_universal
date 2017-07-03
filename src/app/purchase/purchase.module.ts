import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyPurchasesComponent} from './my-purchases/my-purchases.component';
import {MyPurchaseItemComponent} from './my-purchase-item/my-purchase-item.component';
import {PurchaseRoutingModule} from './purchase-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PurchaseRoutingModule
    ],
    declarations: [
        MyPurchasesComponent,
        MyPurchaseItemComponent
    ]
})
export class PurchaseModule {
}
