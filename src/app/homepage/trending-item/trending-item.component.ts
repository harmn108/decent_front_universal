import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../models/content';
import {MdDialog} from '@angular/material';
import {ContentReportComponent} from '../content-report/content-report.component';

@Component({
    selector: 'app-trending-item',
    templateUrl: './trending-item.component.html',
    styleUrls: ['./trending-item.component.scss']
})
export class TrendingItemComponent implements OnInit {

    @Input() content: Content;

    constructor(public dialog: MdDialog) {
    }

    ngOnInit() {
    }


    openReport() {
        this.dialog.open(ContentReportComponent);
    }


}
