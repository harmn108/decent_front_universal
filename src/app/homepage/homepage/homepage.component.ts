import {Component, NgModule, OnInit, Output, ViewEncapsulation, Inject} from '@angular/core';
import {TemplateComponent} from '../../shared/template/template.component';
import {Router} from '@angular/router';
import {ContentService} from '../../core/services/content.service';
import {categories} from '../../shared/categories/category.id.list';
import {AccountService} from '../../core/services/account.service';
import {CryptService} from '../../core/services/crypt.service';
import {Location} from "@angular/common";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    searchContent;
    contentArray = [];
    content = [];
    logedIn;
    homemain;

    constructor(private router: Router,
                public accountService: AccountService) {
        this.contentArray[0] = categories[0];
        this.contentArray[1] = categories[1];
        if (this.accountService.logedIn) {
            this.homemain = 'homemain';
        }
    }

    ngOnInit() {

    }

    search() {
        this.router.navigate(['/search'], {queryParams: {searchKeyword: this.searchContent}});
    }

    contentBuyRedirect (){
        window.open("https://decent.ladesk.com/704831-What-is-the-DECENT-GO", "_blank");
    }

    callForCreators() {
        window.open("https://decent.ch/en/content-providers", "_blank")
    }
}
