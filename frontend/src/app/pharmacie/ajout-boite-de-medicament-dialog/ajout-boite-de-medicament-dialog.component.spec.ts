import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AjoutBoiteDeMedicamentDialogComponent} from "./ajout-boite-de-medicament-dialog.component";


describe('AjoutBoiteDeMedicament.DialogComponent', () => {
  let component: AjoutBoiteDeMedicamentDialogComponent;
  let fixture: ComponentFixture<AjoutBoiteDeMedicamentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutBoiteDeMedicamentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutBoiteDeMedicamentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
