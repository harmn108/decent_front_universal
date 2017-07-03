import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-password-hint',
    templateUrl: './password-hint.component.html',
    styleUrls: ['./password-hint.component.scss']
})

export class PasswordHintComponent implements OnInit {

    hint: string;

    constructor(private accountService: AccountService, private router: Router) {
    }

    ngOnInit() {
    }

    saveHint() {
        this.accountService.createHint(this.hint).subscribe(
            data => {
                this.router.navigate(['sign-up/wait']);
            },
            error => console.log(error)
        );
    }

}