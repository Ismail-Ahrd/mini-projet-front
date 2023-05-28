import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ResultatPrelevementDtos } from 'src/app/models/resultatPrelevement.model';
import { ResultatPrelevementService } from 'src/app/services/resultat-prelevement.service';

@Component({
  selector: 'app-resultat-form',
  templateUrl: './resultat-form.component.html',
  styleUrls: ['./resultat-form.component.css']
})
export class ResultatFormComponent {
  selected!: string;
  page!: number;
  id!: string;
  public resultat!: ResultatPrelevementDtos;
  constructor( private activatedRoute: ActivatedRoute,private resultatprelevement:ResultatPrelevementService,private route:Router){
  }
  @ViewChild('f') Signupfrom: NgForm | undefined;
  ngOnInit(): void {
    this.resultat = {} as ResultatPrelevementDtos;
    this.activatedRoute.params.subscribe(params => {

      this.resultat.idPrelevement= params['id'];})

    }

  onSubmit(){
  console.log(this.Signupfrom?.value);
  this.resultat.dateBA=this.Signupfrom?.value.date_BA;
  this.resultat.numeroBA=this.Signupfrom?.value.numeroBA;
  let jwt: string | null = localStorage.getItem('token');
    let jwtData: string = '';
    if (jwt) jwtData = jwt.split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    let idPersonne = decodedJwtData.idPersonne;
this.resultat.idPersonne=idPersonne;
  if(this.Signupfrom?.value.choix=="Oui"){
    this.resultat.conforme=true;
    this.resultat.dateTA="";
    this.resultat.detail="";
    this.resultat.numeroTA=0;

    
  }
  else{
    this.resultat.conforme=false;
    this.resultat.dateTA=this.Signupfrom?.value.DateTA;
    this.resultat.detail=this.Signupfrom?.value.Détail;
    this.resultat.numeroTA=this.Signupfrom?.value.NuméroTA;
  }
  this.resultatprelevement.saveresultat(this.resultat).subscribe({
    next: data => {
      console.log("Gooood");
      this.Signupfrom?.reset();
      this.route.navigate(["feedback"]);
      
    },
    error: err => {
      console.log(err);
    }
  })
  }
  
}
