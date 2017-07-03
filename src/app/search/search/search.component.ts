import {Component, OnInit, ElementRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DecentCoreService} from '../../core/services/decent-core.service';
import {categories} from '../../shared/categories/category.id.list';
import {trigger, state, style, animate, transition, group} from '@angular/animations';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    animations: [
        trigger('dropDown', [
            state('in', style({height: 120, transform: 'translateY(0)', opacity: 1})),
            transition('void => *', [
                style({height: 50, transform: 'translateY(0px)', opacity: 0}),
                group([
                    animate('0.5s 0.3s ease', style({
                        transform: 'translateY(0)',
                        height: categories.length * 50
                    })),
                    animate('0.5s ease', style({
                        opacity: 1
                    }))
                ])
            ]),
            transition('* => void', [
                group([
                    animate('0.5s ease', style({
                        transform: 'translateY(0px)',
                        height: 0
                    })),
                    animate('0.5s 0.3s ease', style({
                        opacity: 0
                    }))
                ])
            ])
        ])
    ]
})
export class SearchComponent implements OnInit {

    categoriesArray = [];
    category;
    count: number = 5;
    chosenCategory;
    chosenSubcategory;
    subcategory;
    searchName;
    searchKeyWord;
    noContent: Boolean = false;
    categoryDropDown = categories;
    dropdownMenu = false;

    constructor(private activatedRoute: ActivatedRoute,
                private _elementRef: ElementRef,
                private decentCoreService: DecentCoreService,
                private router: Router) {
        this.activatedRoute.queryParams.subscribe(params => {
            if (params.filter || params.searchKeyword) {
                this.count = 10;
                params.filter ? this.searchName =  params.filter :  this.searchKeyWord = params.searchKeyword;
                this.categoriesArray = [params];
            } else {
                this.count = 5;
                this.categoriesArray = categories;
            }
        });
    }

    ngOnInit() {

    }


    changeSelected(index) {
        this.chosenCategory = this.categoryDropDown[index].name;
        this.subcategory = this.categoryDropDown[index].subcategory;
        this.chosenSubcategory = '';
        this.count = 10;
        if (this.searchKeyWord) {
            this.router.navigate(['/search'], {queryParams: {searchKeyword: this.searchKeyWord, id: this.categoryDropDown[index].id}})
        } else {
            this.router.navigate(['/search'], {queryParams: {filter: this.categoryDropDown[index].name, id: this.categoryDropDown[index].id}})
        }
    }

    chooseSubcategory(index) {
        this.chosenSubcategory = this.subcategory[index];
        this.router.navigate(['/search'], {queryParams: {filter: this.chosenSubcategory, id: this.categoryDropDown[index].id}})
    }

    handleContentData(event) {
        !event  ? this.noContent = true : this.noContent = false;
    }
}
