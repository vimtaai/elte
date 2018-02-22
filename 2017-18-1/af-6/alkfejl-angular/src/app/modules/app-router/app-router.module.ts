import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopViewComponent } from '../../components/shop-view/shop-view.component';
import { FamilyViewComponent } from '../../components/family-view/family-view.component';
import { FamilyMemberViewComponent } from '../../components/family-member-view/family-member-view.component';
import { LoginViewComponent } from '../../components/login-view/login-view.component';

const appRoutes: Routes = [
  { path: '', component: ShopViewComponent },
  { path: 'family', component: FamilyViewComponent },
  { path: 'family/:id', component: FamilyMemberViewComponent },
  { path: 'login', component: LoginViewComponent }
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
