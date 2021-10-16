import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs'
import { Hero } from '../../hero';
import { HEROES } from '../../moch-hero';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHero(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
