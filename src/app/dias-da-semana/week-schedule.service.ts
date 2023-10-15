import { WeekEnum } from './week.enum';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectParamsInterface } from './select-params.type';

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

  getSchedule(index: number): FormArray {
    return (this._weekScheduleForm.get('daysOfWeek') as FormArray)
      .at(index)
      .get('schedule') as FormArray;
  }

  dayFormGroup(id: number, name: string): FormGroup {
    return this._formBuilder.group({
      id: [id],
      name: [name],
      schedule: this._formBuilder.array([
        this.hoursFormGroup()
      ])
    });
  }

  createDay(id: number, name: string): void {
    this.daysOfWeek.push(this.dayFormGroup(id, name));
  }

  createForm(): void {
    this._weekScheduleForm = this._formBuilder.group({
      name: [],
      daysOfWeek: this._formBuilder.array([this.dayFormGroup(1, 'Sunday')]),
    });
  }

  private hoursFormGroup(): FormGroup {
    return this._formBuilder.group({
      time: ['']
    });
  }

  removeDay(id: number) {
    this.daysOfWeek.removeAt(id);
  }

  removeSchedule(dayIndex: number, scheduleIndex: number) {
    this.getSchedule(dayIndex).removeAt(scheduleIndex);
  }
}
