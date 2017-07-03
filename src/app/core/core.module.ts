import {NgModule, Optional, SkipSelf} from '@angular/core';
import {DecentCoreService} from './services/decent-core.service';
import {ContentService} from './services/content.service';
import {AccountService} from './services/account.service';
import {CryptService} from './services/crypt.service';

/**
 * Created by vaz on 5/9/17.
 */
@NgModule({
    providers: [DecentCoreService, ContentService, AccountService, CryptService]
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    // static forRoot(config: UserServiceConfig): ModuleWithProviders {
    //     return {
    //         ngModule: CoreModule,
    //         providers: [
    //             {provide: UserServiceConfig, useValue: config }
    //         ]
    //     };
}
