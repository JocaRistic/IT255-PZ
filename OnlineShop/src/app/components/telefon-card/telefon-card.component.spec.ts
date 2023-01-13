import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonCardComponent } from './telefon-card.component';

describe('TelefonCardComponent', () => {
  let component: TelefonCardComponent;
  let fixture: ComponentFixture<TelefonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelefonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
