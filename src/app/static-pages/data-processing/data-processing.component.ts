import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-data-processing',
    templateUrl: './data-processing.component.html',
    styleUrls: ['./data-processing.component.scss']
})
export class DataProcessingComponent implements OnInit {

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
