import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public totalPaths = [
    {
      name: 'Luz',
      url: '/luz',
      icon: ''
    },
    {
      name: 'Oscuridad',
      url: '/oscuridad',
      icon: ''
    },
    {
      name: 'Creacion',
      url: '/creacion',
      icon: ''
    },
    {
      name: 'Destruccion',
      url: '/destruccion',
      icon: ''
    },
    {
      name: 'Aire',
      url: '/aire',
      icon: ''
    },
    {
      name: 'Agua',
      url: '/agua',
      icon: ''
    },
    {
      name: 'Fuego',
      url: '/fuego',
      icon: ''
    },
    {
      name: 'Tierra',
      url: '/tierra',
      icon: ''
    },
    {
      name: 'Esencia',
      url: '/esencia',
      icon: ''
    },
    {
      name: 'Ilusion',
      url: '/ilusion',
      icon: ''
    },
    {
      name: 'Nigromancia',
      url: '/nigromancia',
      icon: ''
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
