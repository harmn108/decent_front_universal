// import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
// import {WebSocketService} from '../api/websocket.service';
// import {Observable} from 'rxjs';
//
// export function accountValidator(api: WebSocketService, exists: boolean = true): AsyncValidatorFn {
//     return (control: AbstractControl): Observable<ValidationErrors | null> => {
//
//         return Observable.create(observer => {
//
//             api.getAccountByName(control.value).subscribe(res => {
//
//                 let result = null;
//                 // should exists
//                 if (exists) {
//                     if (res) {
//                     } else {
//                         result = {accountValidator: 'custom error'};
//                     }
//                 } else {
//                     if (res) {
//                         result = {accountValidator: 'custom error'};
//                     }
//                 }
//
//                 observer.next(result);
//                 observer.complete();
//             });
//         })
//
//     };
// }