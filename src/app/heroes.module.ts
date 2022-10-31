import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroComponent} from "./hero/hero.component";
import {RouterModule} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HeroComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeroComponent
  ]
})
export class HeroesModule { }
