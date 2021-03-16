import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UielementsComponent } from './sidebar/uielements/uielements.component';
import { PanelsComponent } from './sidebar/panels/panels.component';
import { ResponsivetablesComponent } from './sidebar/responsivetables/responsivetables.component';
import { FormsComponent } from './sidebar/forms/forms.component';
import { ChartsComponent } from './sidebar/charts/charts.component';
import { EmptypageComponent } from './sidebar/emptypage/emptypage.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: 'dashboard',canActivate:[AuthGuard], component:DashboardComponent},
  {path: 'login',component:LoginComponent},
  {path: 'panels',component:PanelsComponent},
  {path: 'responsivetables',component:ResponsivetablesComponent},
  {path: 'charts',component:ChartsComponent},
  {path: 'emptypage',component:EmptypageComponent},
  {path: 'forms',component:FormsComponent},
  {path: '**',component:LoginComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[
               DashboardComponent,
               FormsComponent,
               EmptypageComponent,
               ChartsComponent,
               ResponsivetablesComponent,
               UielementsComponent,
               PanelsComponent,
               LoginComponent
              ]