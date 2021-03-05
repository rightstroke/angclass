import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Book } from '../../model/book';
import { BookService } from '../../service/book.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css']
})
export class BookslistComponent implements OnInit,OnDestroy {

  books:Book[];
  subscription:Subscription;


  constructor(private bService:BookService) { }
 


  ngOnInit(): void {
    this.subscription = this.bService.getBooksList().pipe(
      map((data:Book[])=>{
        data.map((d:Book)=>{
          d.author = "MR." + d.author;
          return d;
        });
        return data;
      }),
      map((data:Book[])=>{
        data.map((d:Book)=>{
          d.title = "#" + d.title + "#";
          return d;
        });
        return data;
      }),
      map((data:Book[])=>{
        data.map((d:Book)=>{
          d.cost = d.cost+200;
          return d;
        });
        return data;
      }),
      map(data=>data.filter(d=>d.cost>50))
    ).subscribe((books)=>{
      this.books = books;
    });
  }

  ngOnDestroy(): void {
    console.log("NG ON DESTROY Called");
    this.subscription.unsubscribe();
  }

}
