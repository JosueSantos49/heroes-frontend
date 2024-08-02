import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Heróis';
  menuItems: MenuItem[] = [
    {
      matIcon: 'dashboard',
      routerLink: '/dashboard',
      toolTipText: 'Dashboard',
    },
    {
      fasIcon: 'mask',
      routerLink: '/heroes',
      toolTipText: 'Heroes',
    },
  ];
}
