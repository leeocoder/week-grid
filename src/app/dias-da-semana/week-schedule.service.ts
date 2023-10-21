import { WeekEnum } from './week.enum';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectParamsInterface } from './select-params.type';
import { GridTrainingHoraryInterface } from './interfaces/grid-training-horary.interface';

@Injectable({
  providedIn: 'root',
})
export class WeekScheduleService {
  private _weekScheduleForm: FormGroup = new FormGroup({});
  private selectedWeekDays: SelectParamsInterface[] = [];

  constructor(private _formBuilder: FormBuilder) { }

  get weekScheduleForm(): FormGroup {
    return this._weekScheduleForm;
  }

  get daysOfWeek(): FormArray {
    return this._weekScheduleForm.get('daysOfWeek') as FormArray;
  }

  getWeekDays(): SelectParamsInterface[] {
    return WeekEnum;
  }

  getGridTrainingHoraryValue(): GridTrainingHoraryInterface[] {
    let days:GridTrainingHoraryInterface[] = [];
    this.daysOfWeek.value.forEach((grid: any) => {
      grid.grid_training_horary.forEach((gridTrainingHorary: GridTrainingHoraryInterface) => {
        days.push(gridTrainingHorary);
      });
    });
    return days;
  }

  getGridTrainingHorary(index: number): FormArray {
    return (this._weekScheduleForm.get('daysOfWeek') as FormArray)
      .at(index)
      .get('grid_training_horary') as FormArray;
  }

  dayFormGroup(id: number, name: string): FormGroup {
    return this._formBuilder.group({
      id: [id],
      name: [name],
      grid_training_horary: this._formBuilder.array([
        this.hoursFormGroup(id)
      ])
    });
  }

  createDay(id: number, name: string): void {
    this.daysOfWeek.push(this.dayFormGroup(id, name));
  }

  setUpForm(): void {
    this._weekScheduleForm = this._formBuilder.group({
      name: [],
      daysOfWeek: this._formBuilder.array([this.dayFormGroup(1, 'Sunday')]),
    });
  }

  removeWeekDay(id: number) {
    this.daysOfWeek.removeAt(id);
  }

  removeGridTrainingHorary(dayIndex: number, gridTrainingHoraryIndex: number) {
    this.getGridTrainingHorary(dayIndex).removeAt(gridTrainingHoraryIndex);
  }

  private hoursFormGroup(weekDay: number): FormGroup {
    return this._formBuilder.group({
      horary: [''],
      weekday: [weekDay]
    });
  }
}