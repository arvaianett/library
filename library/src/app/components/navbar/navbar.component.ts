import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbar: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.navbar = [
      {label: 'Home', routerLink: ['/home']},
      {label: 'Search', routerLink: ['/search']},
      {label: 'Basket', routerLink: ['/basket']},
      {label: 'My Books', routerLink: ['/myBooks']},
      {label: 'Statics', routerLink: ['/statics']}
    ];
  }

}
