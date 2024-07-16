import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent {
  constructor(private router: Router) {}

  navigateToPharmacie() {
    this.router.navigate(['/']);
  }

}
