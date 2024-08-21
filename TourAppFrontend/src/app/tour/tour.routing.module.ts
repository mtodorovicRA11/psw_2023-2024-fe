import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourListComponent } from './tour-list/tour-list.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { CreateTourComponent } from './create-tour/create-tour.component';

const routes: Routes = [
  { path: '', component: TourListComponent },
  { path: 'detail/:id', component: TourDetailComponent },
  { path: 'create', component: CreateTourComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
