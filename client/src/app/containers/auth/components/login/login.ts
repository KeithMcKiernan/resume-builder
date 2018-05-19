import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../../../services';

@Component({
  selector: 'login',
  styleUrls: ['./login.scss'],
  templateUrl: './login.html'
})
export class Login implements OnInit {

  public form: FormGroup;

  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,
    private readonly _authService: AuthService
  ) { }

  ngOnInit() {
    this._buildForm();
  }

  private _buildForm() {
    const { required } = Validators;
    this.form = this._formBuilder.group({
      'email': ['test@test.com', required],
      'password': ['password', required]
    });
  }

  public login() {
    const { valid, value: credentials } = this.form;
    if (!!valid) {
      this._router.navigate(['/home']); // temporarily redirect to application
    }
  }
}
