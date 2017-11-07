import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule, MatIconModule],
  exports: [MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule, MatIconModule],
  declarations: []
})
export class UiModule { }
