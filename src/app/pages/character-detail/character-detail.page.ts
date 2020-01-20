import { Component, OnInit } from '@angular/core';
import { Pj } from 'src/app/models/pj.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private characterService: CharacterService) { }
  pj: any;

  async ngOnInit() {
    this.route.queryParams.subscribe(async queryP => {
      console.log(queryP);

      await this.characterService.getCharacter(queryP.id).then(character => {
        this.pj = character;
        console.log(this.pj)
      });
    });
  }

}
