import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SelectButtonOptionClickEvent } from 'primeng/selectbutton';

@Injectable({
  providedIn: 'root',
})
export class HorariosDaSemanaService {
  formulario: FormGroup = new FormGroup({});

  constructor(private _fb: FormBuilder) {
    this.formulario = this._fb.group({
      agendaForm: [],
      days: this._fb.array([]),
    });
  }

  get showChosenDays() {
    return this.formulario.get('days') as FormArray;
  }

  setDays(event: SelectButtonOptionClickEvent) {
    this.showChosenDays.push(this.setAgendaForm(event.option));
    console.log(this.showChosenDays.value);
  }

  setAgendaForm(data: any) {
    return this._fb.group({
      id: [data.id],
      name: [data.label],
      horario: [],
    });
  }

  private findDayIndexById(id: number): number {
    return this.showChosenDays.controls.findIndex(
      (control) => control.get('days')?.value === id
    );
  }
}
