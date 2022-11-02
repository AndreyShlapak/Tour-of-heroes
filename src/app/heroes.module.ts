import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroComponent} from "./components/hero/hero.component";
import {RouterModule} from "@angular/router";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";
import {FormsModule} from "@angular/forms";
import {RegistrationFormFieldComponent} from "./components/registration-form-field/registration-form-field.component";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    HeroComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    HeroComponent,
  ]
})
export class HeroesModule { }
