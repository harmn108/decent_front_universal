import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-dmca',
    templateUrl: './dmca.component.html',
    styleUrls: ['./dmca.component.scss']
})
export class DmcaComponent implements OnInit {

    constructor(private router: Router) {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }

    ngOnInit() {

    }

}
