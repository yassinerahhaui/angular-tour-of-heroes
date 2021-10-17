import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroDetailsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HeroesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
