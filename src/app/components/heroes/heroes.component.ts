import { Component, OnInit } from '@angular/core';

import IHero from 'src/app/interfaces/hero';

import { HeroService } from 'src/app/services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: IHero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes
      )
  }

  addHero(hero: IHero): void {
    this.heroes.push(hero);
  }

  delete(hero: IHero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
