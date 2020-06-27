import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule, MatInputModule, MatFormFieldModule, MatCardModule, MatDialogModule,  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { GeneratenewapikeyComponent } from './generatenewapikey/generatenewapikey.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddnewservicesComponent } from './addnewservices/addnewservices.component';
import { AddservicepopupComponent } from './addservicepopup/addservicepopup.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';


// import { DataTableModule } from 'angular-6-datatable';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    GeneratenewapikeyComponent,
    AddnewservicesComponent,
    AddservicepopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MatSelectModule, MatInputModule, MatFormFieldModule, BrowserAnimationsModule, 
     FormsModule,
     ReactiveFormsModule,
     MatCardModule,
     MatTableModule,
     MatSortModule,
     MatDialogModule,
     HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
