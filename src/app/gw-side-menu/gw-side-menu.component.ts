import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gw-side-menu',
  templateUrl: './gw-side-menu.component.html',
  styleUrls: ['./gw-side-menu.component.scss'],
})
export class GwSideMenuComponent implements OnInit {
  isVisible = false;
  isChallengeVisible = false;
  constructor() {}

  ngOnInit() {}

  toggleCategories() {
    this.isVisible = !this.isVisible;
  }
  toggleChallenges() {
    this.isChallengeVisible = !this.isChallengeVisible;
  }
}
