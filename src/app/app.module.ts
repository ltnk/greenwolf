import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GwHomeComponent } from './gw-home/gw-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { GwHeaderComponent } from './gw-header/gw-header.component';
import { GwFooterComponent } from './gw-footer/gw-footer.component';

import { MatMenuModule } from '@angular/material/menu';
import { GwCategoriesComponent } from './gw-categories/gw-categories.component';
import { GwEbooksComponent } from './gw-ebooks/gw-ebooks.component';
import { GwVideosComponent } from './gw-videos/gw-videos.component';
import { GwSideMenuComponent } from './gw-side-menu/gw-side-menu.component';
import { GwCategorieZeroDechetComponent } from './gw-categorie-zero-dechet/gw-categorie-zero-dechet.component';
import { GwCategorieRecettesComponent } from './gw-categorie-recettes/gw-categorie-recettes.component';
import { GwCategorieEssayerComponent } from './gw-categorie-essayer/gw-categorie-essayer.component';
import { GwCategorieBlogComponent } from './gw-categorie-blog/gw-categorie-blog.component';
import { GwConnexionComponent } from './gw-connexion/gw-connexion.component';
import { GwSubscriptionComponent } from './gw-subscription/gw-subscription.component';
import { GwAboutMeComponent } from './gw-about-me/gw-about-me.component';
import { GwChallengesComponent } from './gw-challenges/gw-challenges.component';
import { GwChallengeSeptComponent } from './gw-challenge-sept/gw-challenge-sept.component';
import { GwChallengeDixComponent } from './gw-challenge-dix/gw-challenge-dix.component';
import { GwChallengeTrenteComponent } from './gw-challenge-trente/gw-challenge-trente.component';

@NgModule({
  declarations: [
    AppComponent,
    GwHomeComponent,
    GwHeaderComponent,
    GwFooterComponent,
    GwCategoriesComponent,
    GwEbooksComponent,
    GwVideosComponent,
    GwSideMenuComponent,
    GwCategorieZeroDechetComponent,
    GwCategorieRecettesComponent,
    GwCategorieEssayerComponent,
    GwCategorieBlogComponent,
    GwConnexionComponent,
    GwSubscriptionComponent,
    GwAboutMeComponent,
    GwChallengesComponent,
    GwChallengeSeptComponent,
    GwChallengeDixComponent,
    GwChallengeTrenteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
