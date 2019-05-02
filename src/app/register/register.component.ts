import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Login } from '../login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public submitted: boolean = false;
  public login: Login;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });


  }
  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.get('email').value, this.registerForm.get('password').value);
  }

}