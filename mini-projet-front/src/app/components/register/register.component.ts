import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "../../models/RegisterRequest.model";
import {AuthenticationService} from "../../services/authentication.service";
import { AuthResponse } from 'src/app/models/authResponse.model';
import { JwtHelperService } from '@auth0/angular-jwt';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerRequest: RegisterRequest = new RegisterRequest();
helper=new JwtHelperService();

  constructor(private http: HttpClient,private router:Router, private authService: AuthenticationService,private route:Router) {

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
      next: (data: AuthResponse) => {
        console.log(data.token);
        localStorage.setItem("token", data.token);
      this.authService.setBooleanValue(true);
      this.route.navigate(['feedback']);
    
    this.authService.decodedToken = this.helper.decodeToken(data.token);

  console.log(this.authService.decodedToken);
      },
      error: err => {
        console.log(err);
      }
    })


  }

}
function jwt_decode(token: string) {
  throw new Error('Function not implemented.');
}

