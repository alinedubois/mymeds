import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMedicamentComponent } from './ajout-medicament.component';

describe('AjoutMedicamentComponent', () => {
  let component: AjoutMedicamentComponent;
  let fixture: ComponentFixture<AjoutMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
