import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router, private toastr: ToastrService) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }
  // Method that will be used to login users with email and password
  async  login(email: string, password: string) {
    console.log(email, password);
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      this.toastr.success('Logged in!', '', {
        positionClass: 'toast-bottom-right'
      });
    } catch (e) {
      this.toastr.error(e.message, '', {
        positionClass: 'toast-bottom-right'
      });
    }
  }
  // Method that will be used to signup/register users with email and password
  async register(email: string, password: string) {
    var result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    this.sendEmailVerification();
  }

  // Method that will be be used to send a verification email to the user while signing-up
  async sendEmailVerification() {
    try {
      await this.afAuth.auth.currentUser.sendEmailVerification()
      this.toastr.success('Signed Up Successfully!', '', {
        positionClass: 'toast-bottom-right'
      });
    } catch (e) {
      this.toastr.error(e.message, '', {
        positionClass: 'toast-bottom-right'
      });
    }
  }

  // Method that will be used to send a password reset email
  async passwordResetEmail(passwordResetEmail: string) {
    try {
      await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      this.toastr.success('Email has been sent!', '', {
        positionClass: 'toast-bottom-right'
      });
    } catch (e) {
      this.toastr.error(e.message, '', {
        positionClass: 'toast-bottom-right'
      });
    }
  }
  // Method that will be used to logout users
  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    // this.router.navigate(['admin/login']);
    this.toastr.success("Logged out!", '', {
      positionClass: 'toast-bottom-right'
    });
  }

  // Method to check if the user is logged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}