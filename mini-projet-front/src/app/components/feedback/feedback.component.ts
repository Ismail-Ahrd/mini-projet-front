import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  page!: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const pageString = params.get("page")
      if (typeof pageString === "string") {
        this.page = JSON.parse(pageString)
      }
    })
  }

  goToPrelevement() {
    this.router.navigate(['/prelevements', {page: this.page}])
  }
}
