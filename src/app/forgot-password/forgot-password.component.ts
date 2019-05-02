import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Login } from '../login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public emailForm: FormGroup;
  public submitted: boolean = false;
  public login: Login;


  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.emailForm.value);
    this.authService.passwordResetEmail(this.emailForm.get('email').value);
  }


}
