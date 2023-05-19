import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit{
  authFormGroup!: FormGroup;
  /*testForm: FormGroup = new FormGroup({
    email: new FormControl("", Validators.email)
  })*/

  constructor(private fb: FormBuilder, private authService: AuthenticationService ) {
  }

  ngOnInit(): void {
    this.authFormGroup = this.fb.group({
      email: this.fb.control(""),
      password: this.fb.control("")
    });
  }

  handleAuthentication() {
    console.log(this.authFormGroup.value);
    const email = this.authFormGroup.value.email;
    const password = this.authFormGroup.value.password;
    this.authService.login(email,password).subscribe({
      next: data => {
        console.log(data.token);
        localStorage.setItem("token", data.token);
      }, error: err => {
        console.log(err.message);
      }
    })
    this.authFormGroup.reset();
  }


}
