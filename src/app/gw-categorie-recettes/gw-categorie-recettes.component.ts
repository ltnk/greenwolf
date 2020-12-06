import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gw-categorie-recettes',
  templateUrl: './gw-categorie-recettes.component.html',
  styleUrls: ['./gw-categorie-recettes.component.scss'],
})
export class GwCategorieRecettesComponent implements OnInit {
  videos = [
    {
      img: 'liquide-vaisselle',
      link: 'https://www.youtube.com/embed/_f9VLcZo2js',
      category: 'Recette naturelle',
      title: 'Le liquide vaisselle',
    },
    {
      img: 'dentifrice',
      link: 'https://www.youtube.com/embed/vmdJjz8FAPs',
      category: 'Recette naturelle',
      title: 'Le dentifrice',
    },
    {
      img: 'lessive',
      link: 'https://www.youtube.com/embed/AE7sKN_pafk',
      category: 'Recette naturelle',
      title: 'La lessive',
    },
  ];
  constructor() {}

  ngOnInit() {}

  goToYoutube() {
    window.location.href = 'https://youtube.com';
  }
}
