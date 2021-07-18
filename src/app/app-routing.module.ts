import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnectToodledoComponent } from './connect-toodledo/connect-toodledo.component';
import { ToodleredirectComponent } from './toodleredirect/toodleredirect.component';
import { ConnectDropboxComponent } from './connect-dropbox/connect-dropbox.component';
import { DropboxredirectComponent } from './dropboxredirect/dropboxredirect.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'connectToodledo', component: ConnectToodledoComponent},
  {path: 'toodleredirect', component: ToodleredirectComponent},
  {path: 'connectDropbox', component: ConnectDropboxComponent},
  {path: 'dropboxredirect', component: DropboxredirectComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
