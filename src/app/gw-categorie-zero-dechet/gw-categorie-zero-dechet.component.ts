import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gw-categorie-zero-dechet',
  templateUrl: './gw-categorie-zero-dechet.component.html',
  styleUrls: ['./gw-categorie-zero-dechet.component.scss'],
})
export class GwCategorieZeroDechetComponent implements OnInit {
  videos = [
    {
      img: 'dechets-sdb',
      link: 'https://www.youtube.com/embed/TLgfjNznkDk',
      category: 'Astuces zéro-déchets',
      title: 'La salle de bain',
    },
    {
      img: 'dechets-cuisine',
      link: 'https://www.youtube.com/embed/i09y_cWpj9c',
      category: 'Astuces zéro-déchets',
      title: 'La cuisine',
    },
  ];
  constructor() {}

  ngOnInit() {}

  goToYoutube() {
    window.location.href = 'https://youtube.com';
  }
}
