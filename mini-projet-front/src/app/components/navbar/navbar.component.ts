import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isRespoLabo: boolean = true;
  isAgentControl: boolean = true;
  log: boolean | undefined;

  constructor(private Http:HttpClient,private AUTH:AuthenticationService,private router:Router){
  AUTH.getBooleanValue().subscribe(value =>
    this.log=value)}
  

  direct(){
    if(this.log==true){
      this.router.navigateByUrl('/prelevements')

    }
    else{
      this.router.navigateByUrl('/')
    }
  }  
}
