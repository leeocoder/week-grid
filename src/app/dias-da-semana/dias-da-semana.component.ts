import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InputSwitchOnChangeEvent } from 'primeng/inputswitch';

@Component({
  selector: 'app-dias-da-semana',
  templateUrl: './dias-da-semana.component.html',
  styleUrls: ['./dias-da-semana.component.scss']
})
export class DiasDaSemanaComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  constructor (private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      customizar_dias: [],
      customizar_horario: []
    });
  }

  updateStatusDias(event: InputSwitchOnChangeEvent) {}

  updateStatusHorario(event: InputSwitchOnChangeEvent) {}


}
