import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-star-rate',
    templateUrl: './star-rate.component.html',
    styleUrls: ['./star-rate.component.scss']
})
export class StarRateComponent implements OnInit {

    @Input() rate: number;
    @Output() voted = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    vote(vote) {
        this.voted.emit(vote);
    }

}
