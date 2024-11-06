import { data } from './seed';

export class Article {
    public title: string;
    public description: string;
    public author: string;
    public imageUrl: string;

    constructor(title: string, description: string, author: string, imageUrl: string) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.imageUrl = imageUrl;
    }
}

export class ArticleData {
    getData(): Article[] {
        let articles: Article[] = [];

        for (let i = 0; i < data.length; i++) {
            articles[i] = new Article(data[i].title, data[i].description, data[i].author, data[i].imageUrl);
        }

        return articles;
    }
}