import { Component} from '@angular/core';
import { trigger, transition, style, animate, state} from '@angular/animations';
import { TranslateService} from 'ng2-translate';
import { Cookie } from 'ng2-cookies';


@Component({
    selector: 'app-root',
    animations: [
        trigger(
            'slideDownUp',
            [
                state(
                    "void",
                    style({
                        top: '-60px'
                    })
                ),
                state(
                    "*",
                    style({
                        top: '0'
                    })
                ),
                transition(
                    "void => * , * => void",
                    [
                        animate( "300ms ease-in-out" )
                    ]
                )]
        )
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public showCookieMessage: boolean;
    public cookieMessage: string = 'In order to give you the best experience, our website uses cookies. By continuing to use this site, you agree to our use of cookies.';


    closeCookieMessage(){
        Cookie.set('hide-cookie-message', 'true', 365);
        this.showCookieMessage = false;
    }

    constructor(private translate: TranslateService) {
        this.translate.use('en');

        setTimeout(()=>{
            this.showCookieMessage = !Cookie.get('hide-cookie-message');
        },2000);
    }
}
