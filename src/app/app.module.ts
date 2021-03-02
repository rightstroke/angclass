import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './components/grid/grid.component'; 
import { FundstransferModule } from './modules/fundstransfer/fundstransfer.module';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ListcountryComponent } from './components/listcountry/listcountry.component';
import { UpdatecountryComponent } from './components/updatecountry/updatecountry.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    ListcountryComponent,
    UpdatecountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FundstransferModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
