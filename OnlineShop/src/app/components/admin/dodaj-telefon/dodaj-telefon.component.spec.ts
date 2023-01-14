import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajTelefonComponent } from './dodaj-telefon.component';

describe('DodajTelefonComponent', () => {
  let component: DodajTelefonComponent;
  let fixture: ComponentFixture<DodajTelefonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajTelefonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajTelefonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
