import { Component, OnInit } from '@angular/core';
import { Path } from 'src/app/models/path.model';
import { SpellService } from '../../services/spell/spell.service';

@Component({
  selector: 'app-magic',
  templateUrl: './magic.page.html',
  styleUrls: ['./magic.page.scss'],
})
export class MagicPage implements OnInit {

  listPaths = [
    {
      name: 'Luz',
      type: 1,
      icon: '../../../assets/paths/luz.png',
    },
    {
      name: 'Oscuridad',
      type: 1,
      icon: '../../../assets/paths/oscuridad.png',
    },
    {
      name: 'Creación',
      type: 1,
      icon: '../../../assets/paths/creacion.png',
    },
    {
      name: 'Destrucción',
      type: 1,
      icon: '../../../assets/paths/destruccion.png',
    },
    {
      name: 'Nigromancia',
      type: 1,
      icon: '../../../assets/paths/nigromancia.png',
    },
    {
      name: 'Aire',
      type: 2,
      icon: '../../../assets/paths/aire.png',
    },
    {
      name: 'Agua',
      type: 2,
      icon: '../../../assets/paths/agua.png',
    },
    {
      name: 'Fuego',
      type: 2,
      icon: '../../../assets/paths/fuego.png',
    },
    {
      name: 'Tierra',
      type: 2,
      icon: '../../../assets/paths/tierra.png',
    },
    {
      name: 'Esencia',
      type: 2,
      icon: '../../../assets/paths/esencia.png',
    },
    {
      name: 'Ilusión',
      type: 2,
      icon: '../../../assets/paths/ilusion.png',
    },
    {
      name: 'Libre Acceso',
      type: 3,
      icon: '../../../assets/paths/libreAcceso.png',
    },
    {
      name: 'Caos',
      type: 3,
      icon: '../../../assets/paths/caos.png',
    },
    {
      name: 'Conocimiento',
      type: 3,
      icon: '../../../assets/paths/conocimiento.png',
    },
    {
      name: 'Guerra',
      type: 3,
      icon: '../../../assets/paths/guerra.png',
    },
    {
      name: 'Literae',
      type: 3,
      icon: '../../../assets/paths/literae.png',
    },
    {
      name: 'Muerte',
      type: 3,
      icon: '../../../assets/paths/muerte.png',
    },
    {
      name: 'Música',
      type: 3,
      icon: '../../../assets/paths/musica.png',
    },
    {
      name: 'Nobleza',
      type: 3,
      icon: '../../../assets/paths/nobleza.png',
    },
    {
      name: 'Paz',
      type: 3,
      icon: '../../../assets/paths/paz.png',
    },
    {
      name: 'Pecado',
      type: 3,
      icon: '../../../assets/paths/pecado.png',
    },
    {
      name: 'Sangre',
      type: 3,
      icon: '../../../assets/paths/sangre.png',
    },
    {
      name: 'Sueño',
      type: 3,
      icon: '../../../assets/paths/sueño.png',
    },
    {
      name: 'Tiempo',
      type: 3,
      icon: '../../../assets/paths/tiempo.png',
    },
    {
      name: 'Umbral',
      type: 3,
      icon: '../../../assets/paths/umbral.png',
    },
    {
      name: 'Vacío',
      type: 3,
      icon: '../../../assets/paths/vacio.png',
    }
  ];
  constructor(private spellService: SpellService) { }

  ngOnInit() {
  }

  async openPath(idPath) {
    await this.spellService.goToAllSpellsFromPath(this.listPaths[idPath].name);
  }
}
