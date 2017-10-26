import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule } from './modules/ui/ui.module'; 

import { AppComponent } from './app.component';
import { ShoplistComponent } from './components/shoplist/shoplist.component';
import { AddformComponent } from './components/addform/addform.component';
import { ShopitemComponent } from './components/shopitem/shopitem.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoplistComponent,
    AddformComponent,
    ShopitemComponent
  ],
  imports: [
    BrowserModule, 
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
