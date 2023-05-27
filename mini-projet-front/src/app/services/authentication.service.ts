import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthRequest} from "../models/authRequest.model";
import {BehaviorSubject, Observable, map} from "rxjs";
import {AuthResponse} from "../models/authResponse.model";
import {RegisterRequest} from "../models/RegisterRequest.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  decodedToken:any;
  backendHost: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<AuthResponse> {
    let url: string = `${this.backendHost}/authentication/authenticate`;
    let request: AuthRequest = new AuthRequest();
    request.email = email;
    request.password = password;
    //console.log(request);

    return this.http.post<AuthResponse>(url,request).pipe(
      map((response: any) => {
        const authResponse = JSON.parse(response) as AuthResponse;
        return authResponse;}))

   
    
  }
  

  public register(registerRequest: RegisterRequest)  {
    let url: string = `${this.backendHost}/authentication/register`;
    console.log(registerRequest);
    return this.http.post<AuthResponse>(url,registerRequest)}
  
  getBooleanValue() {
    return this.booleanValue.asObservable();
  }

  setBooleanValue(newValue: boolean) {
    this.booleanValue.next(newValue);
    
  }
  private booleanValue = new BehaviorSubject<boolean>(false);
}
