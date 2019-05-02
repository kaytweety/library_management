import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService, private firestore: AngularFirestore, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.bookService.FormData = {
      id: null,
      name: '',
      author: '',
      isbn: '',
      no_copies: null,
      price: null
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('books').add(data);
    else
      this.firestore.doc('books/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Submitted successfully!');
  }

}
