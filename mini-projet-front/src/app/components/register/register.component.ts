import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "../../models/RegisterRequest.model";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerRequest: RegisterRequest = new RegisterRequest();

  constructor(private http: HttpClient,private router:Router, private authService: AuthenticationService) {

  }
  profession!: string;
  mdp!: string;
  cmdp!:string;

  onSubmit(f: NgForm) {
    //console.log(f.value);

    this.registerRequest.nom = f.value.nom
    this.registerRequest.prenom = f.value.prenom
    this.registerRequest.email = f.value.email
    this.registerRequest.mdp = f.value.mdp
    this.registerRequest.type = f.value.type

    this.authService.register(this.registerRequest).subscribe({
      next: data => {
        console.log(data.token);
        localStorage.setItem("token", data.token);
      },
      error: err => {
        console.log(err);
      }
    })


  }

}
