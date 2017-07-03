import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WalletComponent} from './wallet/wallet.component';
import {SecurityComponent} from './security/security.component';
import {TransferComponent} from './transfer/transfer.component';
import {WalletTemplateComponent} from '../shared/wallet-template/wallet-template.component';
// import {PurchasesComponent} from './purchases/purchases.component';

const routes: Routes = [
        {
            path: '',
            component: WalletTemplateComponent,
            children: [
                {
                    path: '',
                    pathMatch: 'full',
                    component: WalletComponent
                },
                {
                    path: 'security',
                    pathMatch: 'full',
                    component: SecurityComponent
                },
                {
                    path: 'transfer',
                    pathMatch: 'full',
                    component: TransferComponent
                },
                // {
                //     path: 'purchases',
                //     pathMatch: 'full',
                //     component: PurchasesComponent
                // }
            ]
        }
    ]
;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WalletRoutingModule {
}
