import {Component, OnInit} from '@angular/core';
import {ResultatPrelevementService} from "../../services/resultat-prelevement.service";
import {ResultatPrelevementDtos, ResultatResponse} from "../../models/resultatPrelevement.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prelevement-resultat',
  templateUrl: './prelevement-resultat.component.html',
  styleUrls: ['./prelevement-resultat.component.css']
})
export class PrelevementResultatComponent implements OnInit{
  resultats!: ResultatResponse;
  searchFormGroup!: FormGroup;


  constructor(private resultatService: ResultatPrelevementService,
              private fb:FormBuilder,
              public authservice:AuthenticationService,
              private Route:Router) {
  }

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control("")
    });

    this.handleGetAllResultat(0,5);
  }

  handleGetAllResultat(page: number, size: number) {
    this.resultatService.getAllResultat(page, size).subscribe({
      next: data => {
        this.resultats=data;
        this.resultats.resultatPrelevementDTOS.forEach(resultat => {
          if(!resultat.conforme) {
            this.handleGetDetail(resultat);
          }
        })
      },
      error: err => {
        console.log(err);
      }
    })
  }

  handleGetDetail(resultat: ResultatPrelevementDtos) {
    this.resultatService.getDetailNonConformite(resultat.id).subscribe({
      next: data => {
        resultat.dateTA=data.dateTA;
        resultat.numeroTA=data.numeroTA;
        resultat.detail=data.detail;
      },
      error: err => {
        console.log(err);
      }
    })
  }
  

  goToPage(page: number) {
    this.handleGetAllResultat(page, 5);
  }

  handleSearchPrelevement() {
    console.log(this.searchFormGroup.value);
  }
}
