import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router, NavigationExtras } from '@angular/router';
import { Spell } from 'src/app/models/spell.model';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  async goToAllSpellsFromPath(pathName, orderBy?, direction?) {
    console.log(pathName)
    const naviagtionExtras: NavigationExtras = {
      queryParams: {
        pathName,
        orderBy,
        direction
      }
    }
    this.router.navigate(['/list-spells'], naviagtionExtras);
  }

  async getAllSpellFromPath(pathName, orderBy?, direction?) {
    const params = {
      path: pathName,
      orderBy,
      direction
    };
    const spells = await this.http.get(`${environment.apiUrl}/spells`, { params }).toPromise();
    return spells;
  }
}
