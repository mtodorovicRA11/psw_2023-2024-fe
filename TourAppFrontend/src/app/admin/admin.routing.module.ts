import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { TourManagementComponent } from './tour-management/tour-management.component';

const routes: Routes = [
  { path: 'users', component: UserManagementComponent },
  { path: 'tours', component: TourManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
