import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-booksadd',
  templateUrl: './booksadd.component.html',
  styleUrls: ['./booksadd.component.css']
})
export class BooksaddComponent implements OnInit {

  constructor(private bService:BookService) { }

  books:Book[];

  ngOnInit(): void {
    this.books = [
      {
        "id": "1",
        "title": "json-server",
        "author": "typicode",
        "cost": 300
      },
      {
        "id": "2",
        "title": "Manager",
        "author": "Someone",
        "cost": 500
      },
      {
        "id": "3",
        "title": "Wings of Fire",
        "author": "Mr APJ",
        "cost": 999
      },
      {
        "id": "4",
        "title": "Udaiyar",
        "author": "Kalki",
        "cost": 500
      },
      {
        "id": "0.5143152602947321",
        "author": "author",
        "title": "titleFri Mar 05 2021 00:06:39 GMT+0530 (India Standard Time)",
        "cost": 100.43622519250246
      },
      {
        "id": "0.3314515020977715",
        "author": "author",
        "title": "titleFri Mar 05 2021 00:06:50 GMT+0530 (India Standard Time)",
        "cost": 100.73094195146663
      },
      {
        "id": "0.6182080014908804",
        "author": "author",
        "title": "titleFri Mar 05 2021 00:14:37 GMT+0530 (India Standard Time)",
        "cost": 100.08000812856918
      },
      {
        "id": "0.24784786121917968",
        "author": "author",
        "title": "titleFri Mar 05 2021 00:17:46 GMT+0530 (India Standard Time)",
        "cost": 100.79338794129094
      },
      {
        "id": "0.3089890870874492",
        "author": "author",
        "title": "titleFri Mar 05 2021 00:22:24 GMT+0530 (India Standard Time)",
        "cost": 100.48197792357861
      },
      {
        "id": "0.4029257985368597",
        "title": "myTitle",
        "author": "myAuthor",
        "cost": 50.91790631881719
      }
    ];
  }

  addBook(){

    let b:Book;
    b = {
      id:Math.random().toString(),
      title:"myTitle",
      author:"myAuthor",
      cost: Math.random()+50
    }

    this.bService.addBook(b).subscribe((bk)=>{
      console.log(bk);
    })
  }

  ofBook() {
    of(this.books).pipe(
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
      map(data=>data.filter(d=>d.cost>50)),
      map(data=>data.filter(bk=>{
        console.log(bk.author.indexOf("MR.typicode"));
        if (bk.author.indexOf("MR.typicode")!=0){
          return true;
        } else { 
          return false;
        }
      })),
      catchError((err)=>{
        console.error(err);
        //return of();
        return of({
          "id": "007",
          "author": "James",
          "title": "Bond",
          "cost": 99999
        })      
      })
    ).subscribe((books)=>{
      console.log(books)
    });
  }

}


