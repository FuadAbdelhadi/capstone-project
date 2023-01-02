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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, ROUTES } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import {MatTableModule} from '@angular/material/table';
import{AngularFireModule} from '@angular/fire/compat';
import{AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { enviroments } from 'src/enviroments/enviroments';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { UsersListComponent } from './admin/users-list/users-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RequestComponent,
    StartUpInfoComponent,
    RequestComponent,
    AdminPageComponent,
    UsersListComponent
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
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatTableModule,
    AngularFireModule.initializeApp(enviroments.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent, AppRoutingModule, LandingPageComponent]
})
export class AppModule { }
