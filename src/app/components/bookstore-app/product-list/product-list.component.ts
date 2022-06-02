import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';
import { Book } from './model/Book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  bookService! : BooksService;

  constructor(bookService : BooksService) { }

  ngOnInit(): void {

    this.livros = this.bookService.getBook().subscribe((data => {
      this.livros = data;
      console.log(this.livros);
    }))
  }

}
