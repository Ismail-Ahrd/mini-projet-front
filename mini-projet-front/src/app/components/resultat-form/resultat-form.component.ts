import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-resultat-form',
  templateUrl: './resultat-form.component.html',
  styleUrls: ['./resultat-form.component.css']
})
export class ResultatFormComponent {
  selected!: string;

  constructor(){
  }
  @ViewChild('f') Signupfrom: NgForm | undefined;


  onSubmit(){
    console.log(this.Signupfrom)
  }

}
