import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse } from './auth.response';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public buttonClicked!: string;
  public statusFlag!: boolean;
  public clickedLoginFlag!: boolean;
  public clickedSignUpFlag!: boolean;
  private authObservable!: Observable<AuthResponse>;

  constructor(private authService: AuthService) {
    this.statusFlag;
    this.clickedLoginFlag = false;
    this.clickedSignUpFlag = false;
  }

  public onSubmit(data: NgForm) {
    console.log("Button clicked = " + this.buttonClicked);
    console.log(data.value);

    if (this.buttonClicked == 'SignUp') {
      this.authObservable = this.authService.signup(data.value.email, data.value.password);
      this.clickedSignUpFlag = true;
    }
    if (this.buttonClicked == 'Login') {
      this.authObservable = this.authService.login(data.value.email, data.value.password);
      this.clickedLoginFlag = true;
    }

    this.authObservable.subscribe(
      (data: AuthResponse) => {
        console.log(data);
        this.statusFlag = true;
      },
      error => {
        console.log(error.error)
        this.statusFlag = false;
      }
    );
  }

}
