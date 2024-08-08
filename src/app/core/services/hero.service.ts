import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from '../models/hero.model';
import { Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  //GET /heroes
  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`buscou ${heroes.length} hero(es)`)));

    /*const heroes = of(HEROES);
    this.log('busca heroes');
    return heroes;*/
  }

  // GET /heroes/id
  getHero(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(
        tap((hero) => this.log(`busca heroes id=${id} e nome=${hero.name}`))
      );

    /*const hero = HEROES.find((hero) => hero.id === id)!;
    this.log(`busca heroes id=${id}`);
    return of(hero);*/
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
