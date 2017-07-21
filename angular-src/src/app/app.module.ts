import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PatientService } from './services/patient.service';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { PatientCreateComponent } from './components/patient-create/patient-create.component';
import { DateService } from './services/date.service'

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartComponent } from './components/chart/chart.component';

import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { BookingDashboardComponent } from './components/booking-dashboard/booking-dashboard.component';

import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'patient-dashboard', component: PatientDashboardComponent, canActivate:[AuthGuard]},
  {path:'booking-dashboard', component: BookingDashboardComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    PatientEditComponent,
    PatientCreateComponent,
    ChartComponent,
    DatepickerComponent,
    PatientDashboardComponent,
    BookingDashboardComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    ChartsModule,
    DatepickerModule.forRoot()
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    PatientService,
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
