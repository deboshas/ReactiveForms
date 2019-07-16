import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OldPasswordMatchValidation } from '../password-change/oldPasswordvalidationAsync';
import { PasswordMatchValidation } from './paswordmatchValidation';

@Component({
  selector: 'password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {


  form: FormGroup
  constructor() {

    this.form = new FormGroup({
      oldPassword: new FormControl('', Validators.required, OldPasswordMatchValidation.validate),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required])

    });
  }

  get getoldPassword() {

    return this.form.get('oldPassword');
  }

  get getnewPassword() {

    return this.form.get('newPassword');
  }

  get getconfirmPassword() {

    return this.form.get('confirmPassword');
  }


  ngOnInit() {
  }

}
