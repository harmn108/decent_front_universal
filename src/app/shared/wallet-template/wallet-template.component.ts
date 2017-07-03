import {Component, HostListener, NgZone, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-wallet-template',
    templateUrl: './wallet-template.component.html',
    styleUrls: ['./wallet-template.component.scss']
})
export class WalletTemplateComponent implements OnInit {

    listMenu = [
        {
            name: 'Wallet',
            icon: 'icon-wallet',
            isSelected: 'selected',
            routerLink: '/wallet'
        },
        // {
        // name: 'Purchases',
        // icon: 'icon-purchases',
        // isSelected: '',
        // routerLink: './my-purchases'
        // },
        {
            name: 'Security',
            icon: 'icon-security',
            isSelected: '',
            routerLink: './security'
        },
    ];
    mobileView: Boolean = false;

    constructor(private ngZone: NgZone) {
        if (window.screen.width) {
            this.mobileView = true;
        }
    }

    ngOnInit() {
    }

    changeSelected(index) {
        for (let i in this.listMenu) {
            if (this.listMenu[i].isSelected === 'selected') {
                this.listMenu[i].isSelected = '';
            }
        }
        this.listMenu[index].isSelected = 'selected';
    }

}
