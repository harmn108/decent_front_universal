/**
 * Created by vaz on 5/9/17.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage/homepage.component';
import {AuthGuard} from './guards/auth/auth.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomepageComponent
    },
    { path: 'sign-in', loadChildren: 'app/signin/signin.module#SigninModule'},
    { path: 'sign-up', loadChildren: 'app/signup/signup.module#SignupModule' },
    { path: 'search', loadChildren: 'app/search/search.module#SearchModule' },
    { path: 'wallet', loadChildren: 'app/wallet/wallet.module#WalletModule', canActivate: [AuthGuard]},
    { path: 'static-pages', loadChildren: 'app/static-pages/static-pages.module#StaticPagesModule'},
    // { path: 'purchases', loadChildren: 'app/purchase/purchase.module#PurchaseModule' },
    // { path: 'sendbox', loadChildren: 'app/sendbox/sendbox.module#SendboxModule' },
    // { path: 'publishing', loadChildren: 'app/publishing/publishing.module#PublishingModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
