import { WeekScheduleService } from './week-schedule.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { InputSwitchOnChangeEvent } from 'primeng/inputswitch';

@Component({
  selector: 'app-dias-da-semana',
  templateUrl: './dias-da-semana.component.html',
  styleUrls: ['./dias-da-semana.component.scss']
})
export class DiasDaSemanaComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  constructor (private _fb: FormBuilder, private weekScheduleService: WeekScheduleService) {}

  ngOnInit(): void {
    this.weekScheduleService.createForm();
  }

  get diasDaSemanaForm (): FormGroup {
    return this.weekScheduleService.weekScheduleForm
  }

  get dias (): FormArray {
    return this.weekScheduleService.daysOfWeek
  }

  addDay(): void {
    this.weekScheduleService.createDay(2, 'Segunda-Feira');
  }

  updateStatusDias(event: InputSwitchOnChangeEvent) {}

  updateStatusHorario(event: InputSwitchOnChangeEvent) {}


}
