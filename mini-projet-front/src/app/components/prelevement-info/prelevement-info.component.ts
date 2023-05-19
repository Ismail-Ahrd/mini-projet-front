import {Component, OnInit} from '@angular/core';
import {PrelevementService} from "../../services/prelevement.service";
import {Prelevement, PrelevementResponse} from "../../models/prelevement.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PageEvent} from "@angular/material/paginator";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";


@Component({
  selector: 'app-prelevement-info',
  templateUrl: './prelevement-info.component.html',
  styleUrls: ['./prelevement-info.component.css']
})
export class PrelevementInfoComponent implements OnInit{
  prelevementResponses!: PrelevementResponse;
  filterFormGroup!: FormGroup;

  constructor(private prelevementService: PrelevementService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.filterFormGroup = this.fb.group({
      keyword: this.fb.control(""),
      etat: this.fb.control("")
    });

    this.handleGetAllPrelevement("", "",  0, 5);

  }

  handleGetAllPrelevement(keyword: string, etat: string, page: number, size: number) {
    this.prelevementService.getAllPrelevement(keyword,etat,page,size).subscribe({
      next: data => {
        this.prelevementResponses = data;
        //console.log(data)
      },
      error: err => {
        console.log(err);
      }
    });
  }

  goToPage(page: number) {
    let keyword: string = this.filterFormGroup.value.keyword;
    let etat: string = this.filterFormGroup.value.etat;
    this.handleGetAllPrelevement(keyword, etat, page, 5);
  }

  handleDeletePrelevement(id: number, page: number, size: number) {
    console.log(id, page, size);
    let keyword: string = this.filterFormGroup.value.keyword;
    let etat: string = this.filterFormGroup.value.etat;
    let conf: boolean = confirm("Êtes-vous sûr?");
    if(!conf) return
    this.prelevementService.deletePrelevement(id).subscribe({
      next: data => {
        //console.log(data);
        this.handleGetAllPrelevement(keyword, etat, page, size);
      },
      error: err => {
        console.log(err);
      }
    });
  }


  handleFilterPrelevement() {
    let keyword: string = this.filterFormGroup.value.keyword;
    let etat: string = this.filterFormGroup.value.etat;
    this.handleGetAllPrelevement(keyword, etat, 0, 5);
  }

  goToPrelevementForm() {
    this.router.navigateByUrl("/prelvementForm");
  }

  handleUpdatePrelevement(prelevement: Prelevement) {
    //console.log(prelevement);
    this.router.navigateByUrl(`prelevementForm/${prelevement.id}`)
  }

}
