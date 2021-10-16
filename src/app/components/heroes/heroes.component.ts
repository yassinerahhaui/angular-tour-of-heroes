import { Hero } from './../../hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHero().subscribe(heroes => this.heroes = heroes);
  }
}
