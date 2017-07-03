import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../models/content';

@Component({
    selector: 'app-content-rate',
    templateUrl: './content-rate.component.html',
    styleUrls: ['./content-rate.component.scss']
})
export class ContentRateComponent implements OnInit {

    @Input() content: Content;

    constructor() {
    }

    ngOnInit() {
    }

    handleVotting($event) {
        console.log($event);
    }

}
