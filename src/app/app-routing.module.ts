import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./components/list/list.module').then(m => m.ListPageModule)
  },
  { path: 'magic', loadChildren: './pages/magic/magic.module#MagicPageModule' },
  { path: 'list-spells', loadChildren: './pages/list-spells/list-spells.module#ListSpellsPageModule' },
  { path: 'character-detail', loadChildren: './pages/character-detail/character-detail.module#CharacterDetailPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
