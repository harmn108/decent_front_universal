import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ContentService} from '../../core/services/content.service';
import {DecentCoreService} from '../../core/services/decent-core.service';
import {Router} from '@angular/router';
import {categories} from '../categories/category.id.list';

@Component({
    selector: 'app-content-list-item',
    templateUrl: './content-list-item.component.html',
    styleUrls: ['./content-list-item.component.scss']
})
export class ContentListItemComponent implements OnInit {

    // @Input () content;
    @Input() categoryName;
    @Input() category;
    @Input() count;
    @Input() searchKey;
    @Output() foundContent = new EventEmitter<boolean>();
    contentData = [];
    synopsis;
    seeMore: Boolean = true;
    imageUrl = 'http://lorempixel.com/400/400';

    temporaryContent = [
        [
            {
                title: 'Music 01',
                price: '15 DCT',
                image: '../../assets/images/placeholder/music.png'
            },
            {
                title: 'Music 02',
                price: '15 DCT',
                image: '../../assets/images/placeholder/music.png'
            },
            {
                title: 'Music 03',
                price: '15 DCT',
                image: '../../assets/images/placeholder/music.png'
            },
            {
                title: 'Music 04',
                price: '15 DCT',
                image: '../../assets/images/placeholder/music.png'
            },
            {
                title: 'Music 05',
                price: '15 DCT',
                image: '../../assets/images/placeholder/music.png'
            }
        ],
        [
            {
                title: 'Movie 01',
                price: '15 DCT',
                image: '../../assets/images/placeholder/movie.png'
            },
            {
                title: 'Movie 02',
                price: '15 DCT',
                image: '../../assets/images/placeholder/movie.png'
            },
            {
                title: 'Movie 03',
                price: '15 DCT',
                image: '../../assets/images/placeholder/movie.png'
            },
            {
                title: 'Movie 04',
                price: '15 DCT',
                image: '../../assets/images/placeholder/movie.png'
            },
            {
                title: 'Movie 05',
                price: '15 DCT',
                image: '../../assets/images/placeholder/movie.png'
            }
        ]
    ];
    testContent;

    constructor(private contentService: ContentService,
                private decentCoreService: DecentCoreService,
                private router: Router) {
    }

    ngOnInit() {
        if (this.categoryName.key === 'music') {
            this.testContent =  this.temporaryContent[0];
        } else {
            this.testContent =  this.temporaryContent[1];
        }

        // if (this.categoryName) {
        //     this.getContent(this.categoryName);
        // } else if (this.category.searchKeyword) {
        //     this.filterByKey(this.category);
        // } else if (this.category) {
        //     this.getCategory(this.category, this.count);
        // }
    }

    getContent(category) {
        this.contentService.getContent(category.key).subscribe(
            data => {
                this.contentData['categoryName'] = category.name;
                this.contentData['result'] = data.result;
                for (let contentIndex in this.contentData['result']) {
                    this.contentData['result'][contentIndex].synopsis = JSON.parse(this.contentData['result'][contentIndex].synopsis);
                    if (!this.contentData['result'][contentIndex].synopsis['url']) {
                        this.contentData['result'][contentIndex].synopsis['url'] = category.imageUrl;
                    } else {
                        // for test
                        this.contentData['result'][contentIndex].synopsis['url'] = this.imageUrl;
                    }
                }
            },
            err => console.error(err)
        )
    }

    getCategory(category, count) {
        if (category.filter) {
            this.contentData['categoryName'] = category.filter;
            this.seeMore = false;
        } else {
            this.contentData['categoryName'] = category.name;
        }
        this.decentCoreService.searchContent('', '', '', '', category.id, count)
            .subscribe(res => {
                res.length ? this.foundContent.emit(true): this.foundContent.emit(false);
                this.contentData['result'] = res;
                for (let contentIndex in this.contentData['result']) {
                    this.contentData['result'][contentIndex].synopsis = JSON.parse(this.contentData['result'][contentIndex].synopsis);
                    this.contentData['result'][contentIndex].synopsis['url'] = this.imageUrl;
                }
            })
    }

    filterByCategory(category) {
        if (!category) {
            category = this.categoryName;
        }
        this.seeMore = false;
        this.router.navigate(['/search'], {queryParams: {filter: category.name, id: category.id}})
    }

    filterByKey(searchkey) {
        this.seeMore = false;
        this.decentCoreService.searchContent(searchkey.searchKeyword, '', '', '', searchkey.id || '1', this.count)
            .subscribe(res => {
                    res.length ? this.foundContent.emit(true): this.foundContent.emit(false);
                    this.contentData['result'] = res;
                    for (let contentIndex in this.contentData['result']) {
                        this.contentData['result'][contentIndex].synopsis = JSON.parse(this.contentData['result'][contentIndex].synopsis);
                        this.contentData['result'][contentIndex].synopsis['url'] = this.imageUrl;
                    }
                },
                err => {
                    console.error(err);
                })
    }
}
