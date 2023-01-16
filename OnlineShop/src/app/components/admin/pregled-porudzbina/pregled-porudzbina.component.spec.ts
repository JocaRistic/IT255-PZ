import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledPorudzbinaComponent } from './pregled-porudzbina.component';

describe('PregledPorudzbinaComponent', () => {
  let component: PregledPorudzbinaComponent;
  let fixture: ComponentFixture<PregledPorudzbinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregledPorudzbinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PregledPorudzbinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
