import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BookService } from 'src/app/shared/book.service';
import { Book } from 'src/app/shared/book.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  list: Book[];

  constructor( private bookService: BookService, private firestore: AngularFirestore, private toastr: ToastrService ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as any;
      })
    });
  }

  onEdit(book: Book) {
    this.bookService.FormData = Object.assign({}, book);
  }
 
  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('books/' + id).delete();
      this.toastr.warning('Deleted successfully','EMP. Register');
    }
  }

}
