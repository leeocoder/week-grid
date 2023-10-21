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
    this.weekScheduleService.setUpForm();
  }

  get diasDaSemanaForm (): FormGroup {
    return this.weekScheduleService.weekScheduleForm
  }

  get dias (): FormArray {
    return this.weekScheduleService.daysOfWeek
  }

  addDay(weekDay: number, dayName: string): void {
    this.weekScheduleService.createDay(weekDay, dayName);
  }

  getValue(): void {
    console.log(this.weekScheduleService.getGridTrainingHoraryValue());
  }

  updateStatusDias(event: InputSwitchOnChangeEvent) {}

  updateStatusHorario(event: InputSwitchOnChangeEvent) {}


}
