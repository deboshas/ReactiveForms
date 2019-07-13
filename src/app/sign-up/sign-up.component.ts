import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserNamevalidators } from './username.validators';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.minLength(3), UserNamevalidators.cannotContainSpace]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),

    });
  }

  get username() {

    return this.form.get('username');
  }


  get password() {

    return this.form.get('password');
  }
  ngOnInit() {
  }

}
