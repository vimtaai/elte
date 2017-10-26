import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatInputModule],
  exports: [MatButtonModule, MatInputModule],
  declarations: []
})
export class UiModule { }
