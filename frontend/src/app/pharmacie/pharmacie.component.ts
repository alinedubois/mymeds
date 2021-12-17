import {Component, OnInit} from '@angular/core';
import {BoiteDeMedicament, PharmacieService} from "./pharmacie.service";

@Component({
  selector: 'pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.css']
})
export class PharmacieComponent implements OnInit {
  boitesDeMedicaments: BoiteDeMedicament[]=[];
  recherche = '';

  constructor(
    private pharmacieService: PharmacieService
  ) {

  }

  ngOnInit(): void {
    this.pharmacieService.pharmacie('juillet.aline@gmail.com')
      .subscribe(pharmacie => this.boitesDeMedicaments = pharmacie.boitesDeMedicaments);
  }

}
