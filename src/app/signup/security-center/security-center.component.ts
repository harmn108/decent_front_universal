import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-security-center',
    templateUrl: './security-center.component.html',
    styleUrls: ['./security-center.component.scss']
})
export class SecurityCenterComponent implements OnInit {

    confirmed = true;
    confirmFail = false;
    private user;

    public progress = {
        color: 'success',
        mode: 'indeterminate',
        value: 40,
        bufferValue: 10
    };

    constructor(private accountService: AccountService, private activatedRoute: ActivatedRoute) {
        this.confirmation();
    }

    confirmation(): void {
        this.activatedRoute.params.subscribe(params => {
            this.accountService.confirm(params.code)
                .subscribe(
                    data => {
                        this.confirmed = true;
                    },
                    err => {
                        this.confirmFail = true;
                        console.error(err);
                    }
                );
        });

    }

    ngOnInit() {
    }

}
