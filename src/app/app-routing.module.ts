import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GwHomeComponent } from './gw-home/gw-home.component';
import { GwCategoriesComponent } from './gw-categories/gw-categories.component';

import { GwEbooksComponent } from './gw-ebooks/gw-ebooks.component';
import { GwVideosComponent } from './gw-videos/gw-videos.component';
import { GwCategorieZeroDechetComponent } from './gw-categorie-zero-dechet/gw-categorie-zero-dechet.component';
import { GwCategorieRecettesComponent } from './gw-categorie-recettes/gw-categorie-recettes.component';
import { GwCategorieEssayerComponent } from './gw-categorie-essayer/gw-categorie-essayer.component';
import { GwCategorieBlogComponent } from './gw-categorie-blog/gw-categorie-blog.component';
import { GwAboutMeComponent } from './gw-about-me/gw-about-me.component';
import { GwChallengesComponent } from './gw-challenges/gw-challenges.component';
import { GwChallengeSeptComponent } from './gw-challenge-sept/gw-challenge-sept.component';
import { GwChallengeDixComponent } from './gw-challenge-dix/gw-challenge-dix.component';
import { GwChallengeTrenteComponent } from './gw-challenge-trente/gw-challenge-trente.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: GwHomeComponent },
  { path: 'categories', component: GwCategoriesComponent },
  { path: 'zero-dechet', component: GwCategorieZeroDechetComponent },
  { path: 'recettes', component: GwCategorieRecettesComponent },
  { path: 'essayer', component: GwCategorieEssayerComponent },
  { path: 'blog', component: GwCategorieBlogComponent },

  { path: 'ebooks', component: GwEbooksComponent },
  { path: 'videos', component: GwVideosComponent },
  { path: 'about', component: GwAboutMeComponent },

  { path: 'challenges', component: GwChallengesComponent },
  { path: 'challenge-seven', component: GwChallengeSeptComponent },
  { path: 'challenge-ten', component: GwChallengeDixComponent },
  { path: 'challenge-thirty', component: GwChallengeTrenteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
