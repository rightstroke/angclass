import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookUrl = "http://localhost:3000/posts";

  constructor(private http:HttpClient) { }

  public getBooksList():Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }

  public addBook(b:Book):Observable<Book> {
    return this.http.post<Book>(this.bookUrl,b);
  }
}
