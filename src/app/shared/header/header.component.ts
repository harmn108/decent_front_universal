import {Component, Input, Output, EventEmitter, OnInit, HostListener, ElementRef} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {AccountService} from '../../core/services/account.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    
    // public clickOutside = new EventEmitter();
    // @HostListener('document:click', ['$event.target'])
    
    disableSearch: Boolean;
    headerButtons = false;
    logedIn: Boolean = false;
    email;
    homeheader;
    path;
    searchContent;
    signInButton;
    signUpButton;
    
    
    public dropdownMenuToggle: Boolean = false;
    
    constructor(private _elementRef: ElementRef,
                private router: Router,
                private location: Location,
                private accountService: AccountService,
                private activatedRoute: ActivatedRoute) {
        this.logedIn = this.accountService.logedIn;
        this.email = this.accountService.email;
        this.router.events.subscribe(data => {
            if(data instanceof NavigationEnd) {
                this.path = data['urlAfterRedirects'];
                this.navbarView();
            }
        });
    }
    
    navbarView() {
        // this should be written in better way
        if (this.path === '/' && !this.logedIn) {
            this.headerButtons = true;
            this.signUpButton = true;
            this.signInButton = true;
            this.homeheader = 'home';
        } else if (this.path === '/sign-in') {
            this.headerButtons = true;
            this.signUpButton = true;
        } else if (this.path === '/sign-up') {
            this.headerButtons = true;
            this.signInButton = true;
        } else {
            this.headerButtons = false
        }
    }
    
    toggleDropdownMenu() {
        this.dropdownMenuToggle = !this.dropdownMenuToggle;
    }
    
    ngOnInit() {
    }
    
    signOunt() {
        this.accountService.signOut().subscribe(
            () => {
                this.logedIn = this.accountService.logedIn;
                this.navbarView();
                this.accountService.logOut();
            },
            err => {
                console.error(err);
            }
        );
    }
    
    search() {
        this.router.navigate(['/search'], {queryParams: {searchKeyword: this.searchContent}});
    }
    
}
