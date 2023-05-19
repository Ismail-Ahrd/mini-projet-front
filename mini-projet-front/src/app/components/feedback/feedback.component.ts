import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  constructor(private router: Router) {
  }

  goToPrelevement() {
    this.router.navigateByUrl('/prelevements')
  }
}
