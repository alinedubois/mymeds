import {Component, OnInit} from '@angular/core';
import {Pharmacie, PharmacieService} from "./pharmacie.service";

@Component({
  selector: 'pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.css']
})
export class PharmacieComponent implements OnInit {
  pharmacie: Pharmacie | undefined;

  constructor(
    private pharmacieService: PharmacieService
  ) {

  }

  ngOnInit(): void {
    this.pharmacieService.pharmacie('juillet.aline@gmail.com')
      .subscribe(pharmacie => this.pharmacie = pharmacie);
  }

}
