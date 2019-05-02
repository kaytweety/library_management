import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
//import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookService } from './shared/book.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './login/login.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SortChipsComponent } from './sort-chips/sort-chips.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddBookComponent,
    BookListComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    SortChipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [BookService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }