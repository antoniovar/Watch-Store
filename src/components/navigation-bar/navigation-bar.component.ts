import { Component } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars, faCartShopping, faUserCircle } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  imports: [FontAwesomeModule],
  standalone: true
})
export class NavigationBarComponent {
  faBars = faBars;
  faBagShopping = faCartShopping;
  faUserCircle = faUserCircle;

  constructor(library: FaIconLibrary) {
    library.addIcons(faBars);
    library.addIcons(faCartShopping);
    library.addIcons(faUserCircle);
  }
}
