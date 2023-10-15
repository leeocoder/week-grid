import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HorariosDaSemanaService {
  formulario: FormGroup = new FormGroup({});

  constructor(private _fb: FormBuilder) {
    this.formulario = this._fb.group({
      agendaForm: this._fb.array([])
    })
  }

  get showChosenDays(){
    return this.formulario.get('agendaForm') as FormArray
  }

}
