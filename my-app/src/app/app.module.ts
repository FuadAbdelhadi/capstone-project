import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './end-user/landing-page/landing-page.component';
import { StartUpInfoComponent } from './end-user/start-up-info/start-up-info.component';
import { RequestComponent } from './end-user/request/request.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, ROUTES } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RequestComponent,
    StartUpInfoComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    CommonModule,
    RouterModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent, AppRoutingModule, LandingPageComponent]
})
export class AppModule { }
