import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ConnectToodledoComponent } from './connect-toodledo/connect-toodledo.component';
import { ToodleredirectComponent } from './toodleredirect/toodleredirect.component';
import { ConnectDropboxComponent } from './connect-dropbox/connect-dropbox.component';
import { DropboxredirectComponent } from './dropboxredirect/dropboxredirect.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    ConnectToodledoComponent,
    ToodleredirectComponent,
    ConnectDropboxComponent,
    DropboxredirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
