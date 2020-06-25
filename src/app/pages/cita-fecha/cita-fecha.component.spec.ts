import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaFechaComponent } from './cita-fecha.component';

describe('CitaFechaComponent', () => {
  let component: CitaFechaComponent;
  let fixture: ComponentFixture<CitaFechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaFechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
