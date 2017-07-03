import {Component, Input, OnInit} from '@angular/core';
import {ContentService} from '../../core/services/content.service';
import {Content} from '../models/content';

@Component({
    selector: 'app-trending-list',
    templateUrl: './trending-list.component.html',
    styleUrls: ['./trending-list.component.scss']
})
export class TrendingListComponent implements OnInit {

    @Input() type: string;

    errorMessage: string;
    contents: Content[];

    constructor(private contentService: ContentService) {
    }

    ngOnInit() {
        // @TODO this is an example which shold be replaced with real one
        //this.contentService.getContentsByAuthor('1.2.20')
        //    .subscribe(contents => this.contents = contents.slice(0, 4),
        //        error => this.errorMessage = <any>error);


        // this.contentService.getContentByType(this.type)
        //     .subscribe(contents => this.contents = contents.slice(0, 4),
        //         error => this.errorMessage = <any>error);
    }
}
