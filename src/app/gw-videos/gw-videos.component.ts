import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gw-videos',
  templateUrl: './gw-videos.component.html',
  styleUrls: ['./gw-videos.component.scss'],
})
export class GwVideosComponent implements OnInit {
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
