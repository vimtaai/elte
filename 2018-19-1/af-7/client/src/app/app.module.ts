import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';
import { RoutingModule } from './routing/routing.module';
import { MachineListPageComponent } from './machine-list-page/machine-list-page.component';
import { ReservationListPageComponent } from './reservation-list-page/reservation-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MachineListPageComponent,
    ReservationListPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
