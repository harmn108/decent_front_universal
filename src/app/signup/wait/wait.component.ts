import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-wait',
    templateUrl: './wait.component.html',
    styleUrls: ['./wait.component.scss']
})
export class WaitComponent implements OnInit {

    constructor(private accountService: AccountService, private router: Router) {
    }

    ngOnInit() {
    }

}
