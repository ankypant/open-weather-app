import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGaurd } from '@core/services/auth/auth.gaurd';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGaurd],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
