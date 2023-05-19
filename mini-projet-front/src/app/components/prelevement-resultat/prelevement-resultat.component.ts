import {Component, OnInit} from '@angular/core';
import {ResultatPrelevementService} from "../../services/resultat-prelevement.service";
import {ResultatResponse} from "../../models/resultatPrelevement.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-prelevement-resultat',
  templateUrl: './prelevement-resultat.component.html',
  styleUrls: ['./prelevement-resultat.component.css']
})
export class PrelevementResultatComponent implements OnInit{
  resultats!: ResultatResponse;
  searchFormGroup!: FormGroup;

  constructor(private resultatService: ResultatPrelevementService, private fb:FormBuilder) {
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
        //console.log(data);
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
