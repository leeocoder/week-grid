import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasDaSemanaComponent } from './dias-da-semana.component';

describe('DiasDaSemanaComponent', () => {
  let component: DiasDaSemanaComponent;
  let fixture: ComponentFixture<DiasDaSemanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiasDaSemanaComponent]
    });
    fixture = TestBed.createComponent(DiasDaSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
