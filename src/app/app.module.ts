import { NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import { ChartsModule } from 'ng2-charts';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { AppRoutingModule } from './app-routing.module';
import { UielementsComponent } from './sidebar/uielements/uielements.component';
import { PanelsComponent } from './sidebar/panels/panels.component';
import { ResponsivetablesComponent } from './sidebar/responsivetables/responsivetables.component';
import { FormsComponent } from './sidebar/forms/forms.component';
import { ChartsComponent } from './sidebar/charts/charts.component';
import { EmptypageComponent } from './sidebar/emptypage/emptypage.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

import { RegisterformComponent } from './registerform/registerform.component';


import { ToastrModule } from 'ngx-toastr';
import { RegisteredusersComponent } from './sidebar/panles/registeredusers/registeredusers.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    UielementsComponent,
    PanelsComponent,
    
    ResponsivetablesComponent,
    FormsComponent,
    ChartsComponent,
    EmptypageComponent,
    LoginComponent,

    RegisterformComponent,

    RegisteredusersComponent,

  ],
  imports: [
    ToastrModule.forRoot(
      {
        
      }
    ),
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
   
    ChartsModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
   
  ],
  providers: [AuthGuard, HeaderComponent,],
  bootstrap: [
    AppComponent,
    DashboardComponent,
    HeaderComponent, 
    UielementsComponent,
    PanelsComponent,
    ResponsivetablesComponent,
    FormsComponent,
    ChartsComponent,
    EmptypageComponent,],
  exports: [ChartsModule] 
})
export class AppModule { }
