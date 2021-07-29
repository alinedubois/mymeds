import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheMedicamentComponent } from './fiche-medicament.component';

describe('FicheMedicamentComponent', () => {
  let component: FicheMedicamentComponent;
  let fixture: ComponentFixture<FicheMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheMedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
