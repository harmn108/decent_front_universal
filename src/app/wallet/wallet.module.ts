import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WalletComponent} from './wallet/wallet.component';
import {WalletRoutingModule} from './wallet-routing.module';
import {SharedModule} from '../shared/shared.module';
import { SecurityComponent } from './security/security.component';
import { TransferComponent } from './transfer/transfer.component';
import { PurchasesComponent } from './purchases/purchases.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        WalletRoutingModule
    ],
    declarations: [
        WalletComponent,
        SecurityComponent,
        TransferComponent,
        PurchasesComponent
    ]
})
export class WalletModule {
}
