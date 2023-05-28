import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResultatPrelevementDtos, ResultatResponse} from "../models/resultatPrelevement.model";

@Injectable({
  providedIn: 'root'
})
export class ResultatPrelevementService {
  backendHost: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  public getAllResultat(page: number, size: number): Observable<ResultatResponse> {
    let url: string =
      `${this.backendHost}/resultatPrelevement/personne?page=${page}&size=${size}`;
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<ResultatResponse>(url, httpOptions);
  }

  
  
public saveresultat(resultat:ResultatPrelevementDtos){
  let url: string = `${this.backendHost}/resultatPrelevement`;
  const token = localStorage.getItem("token");
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + token
    })
  };
  return this.http.post(url, resultat, httpOptions)
}
  public deleteResultat(id: number) {
    return this.http.delete(`${this.backendHost}/resultatPrelevement/${id}`);
  }

}
