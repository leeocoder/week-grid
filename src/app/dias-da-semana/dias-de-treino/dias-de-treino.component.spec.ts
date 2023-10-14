import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasDeTreinoComponent } from './dias-de-treino.component';

describe('DiasDeTreinoComponent', () => {
  let component: DiasDeTreinoComponent;
  let fixture: ComponentFixture<DiasDeTreinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiasDeTreinoComponent]
    });
    fixture = TestBed.createComponent(DiasDeTreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
