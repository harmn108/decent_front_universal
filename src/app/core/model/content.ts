/**
 * Created by vaz on 6/19/17.
 */
export class Content {
    AVG_rating;
    URI;
    author;
    created;
    expiration;
    id;
    price;
    size;
    status;
    synopsis;
    times_bought;

    constructor(content) {
        this.AVG_rating = content.AVG_rating;
        this.URI = content.URI;
        this.author = content.author;
        this.created = content.created;
        this.expiration = content.expiration;
        this.id = content.id;
        this.price = content.price;
        this.size = content.size;
        this.status = content.status;
        this.synopsis = content.synopsis;
        this.times_bought = content.times_bought;
    }
}