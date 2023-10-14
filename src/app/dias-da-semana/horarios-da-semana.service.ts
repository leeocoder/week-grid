import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HorariosDaSemanaService {
  formulario: FormGroup = new FormGroup({});

  constructor(private _fb: FormBuilder) { }

  adicionarDia(formulario: FormGroup) {
    const novoDia = this._fb.group({
      nome: ['', Validators.required],
      horarios: this._fb.array([])
    });

    // this.dias.push(novoDia);
  }

}
