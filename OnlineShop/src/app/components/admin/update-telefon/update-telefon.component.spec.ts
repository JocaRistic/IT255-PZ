import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTelefonComponent } from './update-telefon.component';

describe('UpdateTelefonComponent', () => {
  let component: UpdateTelefonComponent;
  let fixture: ComponentFixture<UpdateTelefonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTelefonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTelefonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
