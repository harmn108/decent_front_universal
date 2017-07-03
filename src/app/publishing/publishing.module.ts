import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublishingRoutingModule} from './publishing-routing.module';
import {ArtistProfileComponent} from './artist-profile/artist-profile.component';
import {SharedModule} from '../shared/shared.module';
import {ArtistProfileUploadComponent} from './artist-profile-upload/artist-profile-upload.component';
import { MyUploadsComponent } from './my-uploads/my-uploads.component';
import { WarningDeleteComponent } from './warning-delete/warning-delete.component';
import { AddItem13Component } from './add-item-1-3/add-item-1-3.component';
import { AddItem23Component } from './add-item-2-3/add-item-2-3.component';
import { AddItem33Component } from './add-item-3-3/add-item-3-3.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PublishingRoutingModule
    ],
    declarations: [
        ArtistProfileComponent,
        ArtistProfileUploadComponent,
        MyUploadsComponent,
        WarningDeleteComponent,
        AddItem13Component,
        AddItem23Component,
        AddItem33Component
    ]
})
export class PublishingModule {
}
