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

  get days() {
    return this.formulario.get('days') as FormArray;
  }

  setDays(event: SelectButtonOptionClickEvent) {
    const index = this.findDayIndexBy('name', event.option.label, this.days);
    if(index < 0) {
      this.days.push(this.setAgendaForm(event.option));
    } else {
      this.days.removeAt(index);
    }
  }

  setAgendaForm(data: any) {
    return this._fb.group({
      id: [data.id],
      name: [data.label],
      horario: [],
    });
  }

  private findDayIndexBy(controlName: string, type: unknown, formArray: FormArray): number {
    return formArray.controls.findIndex(
      (control) => control.get(controlName)?.value === type
    );
  }
}
