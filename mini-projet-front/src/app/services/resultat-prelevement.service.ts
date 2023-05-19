import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResultatResponse} from "../models/resultatPrelevement.model";

@Injectable({
  providedIn: 'root'
})
export class ResultatPrelevementService {
  backendHost: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  public getAllResultat(page: number, size: number): Observable<ResultatResponse> {
    return this.http.get<ResultatResponse>(`${this.backendHost}/resultatPrelevement?page=${page}&size=${size}`)
  }

  public deleteResultat(id: number) {
    return this.http.delete(`${this.backendHost}/resultatPrelevement/${id}`);
  }

}
