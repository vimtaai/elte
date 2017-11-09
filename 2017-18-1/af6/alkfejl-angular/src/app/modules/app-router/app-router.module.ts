import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopViewComponent } from '../../components/shop-view/shop-view.component';
import { FamilyViewComponent } from '../../components/family-view/family-view.component';

const appRoutes: Routes = [
  { path: '', component: ShopViewComponent },
  { path: 'family', component: FamilyViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }
