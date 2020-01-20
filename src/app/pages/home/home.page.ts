import { Component } from '@angular/core';
import { Pj } from 'src/app/models/pj.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public listPjs = [
    {
      id: 1,
      name: 'John',
      listClasses: [
        {
          name: 'Hechicero',
          level: 1,
          listPaths: [
            {
              name: 'Luz',
              level: '10',
              subPath:
                {
                  name: 'Guerra',
                  level: '10'
                },
              freeAccess: [
                {
                  spell: 'Tipo 1'
                },
                {
                  spell: 'Tipo 2'
                }
              ]
            }
          ]
        }
      ],
      description: 'Desc'
    },
    {
      id: 2,
      name: 'John1',
      listClasses: [
        {
          name: 'Hechicero',
          level: 1,
          listPaths: [
            {
              name: 'Luz',
              level: '10',
              subPath:
                {
                  name: 'Guerra',
                  level: '10'
                },
              freeAccess: [
                {
                  spell: 'Tipo 1'
                },
                {
                  spell: 'Tipo 2'
                }
              ]
            },
            {
              name: 'Oscuridad',
              level: '10',
              subPath:
                {
                  name: 'Guerra',
                  level: '10'
                },
              freeAccess: [
                {
                  spell: 'Tipo 1'
                },
                {
                  spell: 'Tipo 2'
                }
              ]
            }
          ]
        }
      ],
      description: 'Desc',
    },
    {
      id: 3,
      name: 'John2',
      listClasses: [
        {
          name: 'Hechicero',
          level: 1,
          listPaths: [
            {
              name: 'Luz',
              level: '10',
              subPath:
                {
                  name: 'Guerra',
                  level: '10'
                },
              freeAccess: [
                {
                  spell: 'Tipo 1'
                },
                {
                  spell: 'Tipo 2'
                }
              ]
            },
            {
              name: 'Oscuridad',
              level: '10',
              subPath:
                {
                  name: 'Guerra',
                  level: '10'
                },
              freeAccess: [
                {
                  spell: 'Tipo 1'
                },
                {
                  spell: 'Tipo 2'
                }
              ]
            }
          ]
        }
      ],
      description: 'Desc',
    },
  ];
  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    
  }

  public test(pj?: Pj) {

  }

  public goToMagic() {
    this.router.navigate(['/magic']);
  }
  public goToKi() {

  }

  public goToMentalism() {

  }

}
