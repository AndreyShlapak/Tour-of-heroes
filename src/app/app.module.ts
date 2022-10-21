import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeroesModule} from "./heroes.module";
import {AuthGuard} from "./auth.guard";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {MessagesComponent} from "./messages/messages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroSearchComponent} from "./hero-search/hero-search.component";
import {RegistrationComponent} from "./registration/registration.component";
import {HeroesComponent} from "./heroes/heroes.component";


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    RegistrationComponent,
    HeroesComponent
  ],
  imports: [
    HeroesModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
