import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gw-home',
  templateUrl: './gw-home.component.html',
  styleUrls: ['./gw-home.component.scss'],
})
export class GwHomeComponent implements OnInit {
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

  slides = [
    {
      title: 'Une nouvelle vidéo tous les mardis sur la chaine Youtube !',
      icon: 'unicorn',
      link: 'https://www.youtube.com/channel/UCnLJ7SZWDURUmyx6YPCLUXw',
      iconLink: 'youtube-logo',
    },
    {
      title:
        'Vous êtes au bon endroit si vous souhaitez un style de vie plus responsable !',
      icon: 'ecological',
      link: 'https://www.youtube.com/channel/UCnLJ7SZWDURUmyx6YPCLUXw',
      iconLink: 'welcome',
    },
    {
      title: 'Vous souhaitez en savoir plus sur nous, sur notre démarche ?',
      icon: 'girl',
      link: 'https://thegreenwolf.fr/#/about',
      iconLink: 'focus',
    },
  ];
  slideIndex = 0;

  constructor() {
    setInterval(() => {
      this.goToNextSlide();
    }, 5000);
  }

  ngOnInit() {}

  goToYoutube() {
    window.location.href = 'https://youtube.com';
  }

  goToPreviousSlide() {
    if (this.slideIndex > 0) {
      this.slideIndex -= 1;
    } else {
      this.slideIndex = this.slides.length - 1;
    }
  }

  goToNextSlide() {
    if (this.slideIndex < this.slides.length - 1) {
      this.slideIndex += 1;
    } else if (this.slideIndex === this.slides.length - 1) {
      this.slideIndex = 0;
    }
  }

  /*


  slides = [
    {
      id: 0,
      img: 'who-homepage.png',
      title: `Page de bienvenue`,
    },
    {
      id: 1,
      img: 'who-dragon-ball.png',
      title: `Quiz Dragon Ball`,
    },
    {
      id: 2,
      img: 'who-kimetsu.png',
      title: `Quiz Kimetsu no yaiba`,
    },
    {
      id: 3,
      img: 'who-one-piece.png',
      title: `Quiz One Piece`,
    },
  ];

   */
}
