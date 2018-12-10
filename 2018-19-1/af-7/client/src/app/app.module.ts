import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatGridListModule, MatListModule, MatTableModule, MatSelectModule, MatFormFieldModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatIconModule } from '@angular/material';
import { RoutingModule } from './routing/routing.module';
import { MachineListPageComponent } from './machine-list-page/machine-list-page.component';
import { ReservationListPageComponent } from './reservation-list-page/reservation-list-page.component';
import { NewReservationPageComponent } from './new-reservation-page/new-reservation-page.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MachineListPageComponent,
    ReservationListPageComponent,
    NewReservationPageComponent,
    ReservationFormComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
