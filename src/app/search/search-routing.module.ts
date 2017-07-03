import {NgModule} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';


import {TemplateComponent} from '../shared/template/template.component';
import {SearchComponent} from './search/search.component';
import {SearchTemplateComponent} from '../shared/search-template/search-template.component';


const routes: Routes = [
        {
            path: '',
            component: SearchTemplateComponent,
            children: [
                {
                    path: '',
                    component: SearchComponent
                }
            ]
        }
    ]
;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchRoutingModule {
}
