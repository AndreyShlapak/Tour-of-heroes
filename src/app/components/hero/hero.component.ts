import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

import {Hero} from "../../models/hero";
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() public hero!: Hero;
  @Output() public deleteEmitter = new EventEmitter<number>();

  constructor(heroService: HeroService) {
  }

  delete(hero: Hero): void {

    this.deleteEmitter.emit(hero.id);
  }

  ngOnInit(): void {
  }

}
