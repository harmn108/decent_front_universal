import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArtistProfileComponent} from './artist-profile/artist-profile.component';
import {WalletTemplateComponent} from '../shared/wallet-template/wallet-template.component';
import {ArtistProfileUploadComponent} from './artist-profile-upload/artist-profile-upload.component';
import {MyUploadsComponent} from './my-uploads/my-uploads.component';
import {WarningDeleteComponent} from './warning-delete/warning-delete.component';
import {AddItem13Component} from "./add-item-1-3/add-item-1-3.component";
import {AddItem23Component} from "./add-item-2-3/add-item-2-3.component";
import {AddItem33Component} from "./add-item-3-3/add-item-3-3.component";


const routes: Routes = [
        {
            path: '',
            component: WalletTemplateComponent,
            children: [
                // {
                //     path: '',
                //     pathMatch: 'full',
                //     component: ArtistProfileComponent
                // },
                // {
                //     path: 'artist-profile-upload',
                //     pathMatch: 'full',
                //     component: ArtistProfileUploadComponent
                // },
                // {
                //     path: 'my-uploads',
                //     pathMatch: 'full',
                //     component: MyUploadsComponent
                // },
                // {
                //     path: 'warning-delete',
                //     pathMatch: 'full',
                //     component: WarningDeleteComponent
                // },
                // {
                //     path: 'add-item-1-3',
                //     pathMatch: 'full',
                //     component: AddItem13Component
                // },
                // {
                //     path: 'add-item-2-3',
                //     pathMatch: 'full',
                //     component: AddItem23Component
                // },
                // {
                //     path: 'add-item-3-3',
                //     pathMatch: 'full',
                //     component: AddItem33Component
                // }
            ]
        }
    ]
;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublishingRoutingModule {
}
