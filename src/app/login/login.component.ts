import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Login } from '../login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: boolean = false;
  public login: Login;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }

}
