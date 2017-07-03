import {NgModule} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';


import {WalletTemplateComponent} from '../shared/wallet-template/wallet-template.component';
import {MyPurchasesComponent} from './my-purchases/my-purchases.component';
import {MyPurchaseItemComponent} from './my-purchase-item/my-purchase-item.component';

const routes: Routes = [
        {
            path: '',
            component: WalletTemplateComponent,
            children: [
                // {
                //     path: '',
                //     pathMatch: 'full',
                //     component: MyPurchasesComponent
                // },
                // {
                //     path: 'my-item',
                //     component: MyPurchaseItemComponent
                // }
            ]
        }
    ]
;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurchaseRoutingModule {
}
