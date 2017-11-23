import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule } from './modules/ui/ui.module';
import { AppRouterModule } from './modules/app-router/app-router.module';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { ShoplistComponent } from './components/shoplist/shoplist.component';
import { AddformComponent } from './components/addform/addform.component';
import { ShopitemComponent } from './components/shopitem/shopitem.component';
import { FamilyViewComponent } from './components/family-view/family-view.component';
import { ShopViewComponent } from './components/shop-view/shop-view.component';
import { FamilyMemberViewComponent } from './components/family-member-view/family-member-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoplistComponent,
    AddformComponent,
    ShopitemComponent,
    FamilyViewComponent,
    ShopViewComponent,
    FamilyMemberViewComponent
  ],
  imports: [
    BrowserModule, 
    UiModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
