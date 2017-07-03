
// import {EventEmitter, Injectable, Injector} from '@angular/core';
// import {Router} from '@angular/router';
// import {AccountService} from './account.service';
// import {current} from 'codelyzer/util/syntaxKind';
// import {Account} from '../model/account';
//
// @Injectable()
// export class AuthService {
//
//     // token: string;
//     token;
//     password;
//     email;
//     logedIn: Boolean = false;
//     currentUsername: string = null;
//
//     constructor(private router: Router, private accountService: AccountService, injector: Injector) {
//         this.isLogedIn();
//     }
//
//     isLogedIn() {
//         this.token && this.password && this.email ? this.logedIn = true : this.logedIn = false;
//     }
//
//     logOut() {
//         this.token = '';
//         this.password = '';
//         this.email = '';
//         this.currentUsername = '';
//         this.logedIn = false;
//         this.router.navigate(['/']);
//     }
//
//
//     /**
//      * @TODO this should be written in much better way
//      * @returns {Account}
//      */
//     getCurrentUser(): Account {
//         const currentUser = new Account();
//         currentUser.name = this.currentUsername;
//         currentUser.pkey = this.accountService.getPrivateKey(this.password);
//         return currentUser;
//     }
//
// }
