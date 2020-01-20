import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

    async getCharacter(id) {
      const params = {
        id,
      };
      const char = await this.http.get(`${environment.apiUrl}/characters`, { params }).toPromise();
      return char;
    }
}
