import {Injectable} from '@angular/core';
import {DecentCoreService} from './decent-core.service';
import {Observable} from 'rxjs/Observable';
import {Headers, Http} from '@angular/http';
import {environment} from '../../../environments/environment';


const {Apis} = require('decentjs-lib/lib/ws/cjs');

@Injectable()
export class ContentService {

    static readonly TYPE_AUDIO = 'audio';
    static readonly TYPE_VIDEO = 'video';
    static readonly TYPE_IMAGE = 'image';
    static readonly TYPE_SOFTWARE = 'soft';
    CONTENT_TYPE_MUSIC = 'music';
    CONTENT_TYPE_MOVIES = 'movies';
    CONTENT_TYPE_BOOKS = 'books';
    CONTENT_TYPE_AUDIOBOOKS = 'audiobooks';
    CONTENT_TYPE_SOFTWARE = 'software';
    CONTENT_TYPE_GAMES = 'games';
    CONTENT_TYPE_PICTURES = 'pictures';
    CONTENT_TYPE_DOCUMENTS = 'documents';
    content;
    contentArray = [];

    private headers = new Headers({'Content-Type': 'application/json'});
    private contentUrl = environment.decentgo_url + '/api/v1/content/last';

    constructor(private decentCoreService: DecentCoreService, private http: Http) {
    }

    getContentsByAuthor(author_id) {
        return Observable.create(observer => {
            this.decentCoreService.getApi().then((res) => {
                Apis.instance().db_api().exec('list_content_by_author', [author_id]).then(result => {
                    observer.next(result);
                });
            });
        });
    }

    getContentByType(type) : Observable<any> {
        return Observable.create(observer => {
            this.decentCoreService.getApi().then((res) => {
                // TODO: create command in decentd that will return content by type.
                Apis.instance().db_api().exec('search_content', ["", "", "", "", "0.0.0", "", 100]).then(result => {
                    observer.next(result);
                });
            });
        });
    }

    getContent (content) {
            return this.http
                .get(this.contentUrl + `/${content}`, {headers: this.headers})
                .map(response => response.json())
                .catch(error => this.handleError(error))
    }

    private handleError(error: any): Observable<any> {
        if (error.status == 404) {
            error._body = '{"message": "user_not_found"}';
            return Observable.throw(error);
        }

        return Observable.throw(error.message || error);
    }

}
