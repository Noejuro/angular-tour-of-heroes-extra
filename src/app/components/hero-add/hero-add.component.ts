import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import IHero from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.scss']
})
export class HeroAddComponent implements OnInit {
  @Output() addNewHero = new EventEmitter<IHero>();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as IHero)
      .subscribe(hero => {
        this.addNewHero.emit(hero);
      });
  }

}
