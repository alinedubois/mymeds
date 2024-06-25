import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PreferencesUtilisateurComponent} from './preferences-utilisateur.component';

describe('PreferencesUtilisateurComponent', () => {
  let component: PreferencesUtilisateurComponent;
  let fixture: ComponentFixture<PreferencesUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferencesUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferencesUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
