import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PrelevementInfoComponent} from "./components/prelevement-info/prelevement-info.component";
import {PrelevementResultatComponent} from "./components/prelevement-resultat/prelevement-resultat.component";
import {PrelevementFormComponent} from "./components/prelevement-form/prelevement-form.component";
import {ResultatFormComponent} from "./components/resultat-form/resultat-form.component";
import {FeedbackComponent} from "./components/feedback/feedback.component";
import {RegisterComponent} from "./components/register/register.component";
import {PrelevementUpdateComponent} from "./components/prelevement-update/prelevement-update.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "prelevements", component: PrelevementInfoComponent },
  { path: "prelevementForm/:id", component: PrelevementUpdateComponent},
  { path: "resultatPrelevements", component: PrelevementResultatComponent },
  {path: "prelvementForm", component: PrelevementFormComponent},
  {path: "resultatForm", component: ResultatFormComponent},
  {path: "feedback", component: FeedbackComponent},
  {path: "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
