import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule, MatIconModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule, MatIconModule, MatProgressSpinnerModule],
  declarations: []
})
export class UiModule { }
