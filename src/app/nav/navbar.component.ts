import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [
    `
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-righ: 100x;}
    @media (max-width: 1200px) {#searchForm {dis[play:none}}
  `,
  ],
})
export class NavbarComponent {}
