import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { UielementsComponent } from './sidebar/uielements/uielements.component';
import { PanelsComponent } from './sidebar/panels/panels.component';
import { ResponsivetablesComponent } from './sidebar/responsivetables/responsivetables.component';
import { FormsComponent } from './sidebar/forms/forms.component';
import { ChartsComponent } from './sidebar/charts/charts.component';
import { EmptypageComponent } from './sidebar/emptypage/emptypage.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

import { RegisterformComponent } from './registerform/registerform.component';


const routes: Routes = [
  {path: 'dashboard',canActivate:[AuthGuard], component:DashboardComponent},
  {path: 'login', component:LoginComponent},
  {path: 'panels',canActivate:[AuthGuard],component:PanelsComponent},
  {path: 'emptypage', canActivate:[AuthGuard],component:EmptypageComponent},
  {path: 'responsivetables',canActivate:[AuthGuard],component:ResponsivetablesComponent},
  {path: 'charts',canActivate:[AuthGuard],component:ChartsComponent},
 
  {path: 'registerform',component:RegisterformComponent},
  {path: 'forms',canActivate:[AuthGuard],component:FormsComponent},
  {path: '**',component:LoginComponent},
  {path: 'header',canActivate:[AuthGuard],component:HeaderComponent},
  
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
               LoginComponent,
              
               HeaderComponent,
              ]