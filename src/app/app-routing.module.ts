import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {FirstComponent} from './component/first.component';
import { LoginComponent } from './component/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Dashboard', component: FirstComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routecomponent = [FirstComponent,LoginComponent]

