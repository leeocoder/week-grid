import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosDeTreinoComponent } from './horarios-de-treino.component';

describe('HorariosDeTreinoComponent', () => {
  let component: HorariosDeTreinoComponent;
  let fixture: ComponentFixture<HorariosDeTreinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorariosDeTreinoComponent]
    });
    fixture = TestBed.createComponent(HorariosDeTreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
