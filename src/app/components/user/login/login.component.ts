import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _loginForm: FormGroup;
  private _email: FormControl;
  private _password: FormControl;

  constructor(private _form: FormBuilder, private _authService: AuthService) {
  }

  ngOnInit() {
    this._email = new FormControl('', Validators.required);
    this._password = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.createForm();
  }

  fieldIsNotProvided() {
    return this._password.touched && this._password.hasError('required');
  }

  fieldIsTooShort() {
    return this._password.touched && this._password.hasError('minlength(4)');
  }

  createForm() {
    this._loginForm = this._form.group({
      email: this._email,
      password: this._password,
    });
  }

  onSubmit() {
    this._authService.login(this._loginForm.value);
  }
}
