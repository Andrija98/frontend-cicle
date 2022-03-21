import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ManageCandidatesComponent } from './manage-candidates/manage-candidates.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CandidatesListComponent } from './manage-candidates/candidates-list/candidates-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ManageCandidatesComponent,
    CandidatesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
