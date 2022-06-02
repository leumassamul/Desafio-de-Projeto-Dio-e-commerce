import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http"
import { Book } from "./model/Book"


@Injectable ()

export class BooksService {
    private url = 'https://localhost:4200/api/Bookstore';

    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/joson'})
    }

    constructor (private http:HttpClient){}

    getBook(){

        return this.http.get(this.url)
    }
}