import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AccountService} from '../../core/services/account.service';

@Injectable()
export class HavePhraseGuard implements CanActivate {

  constructor(private accountService: AccountService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.accountService.recoveryPhrase) {
      return true;
    }

    this.router.navigate(['/']);
  }
}
