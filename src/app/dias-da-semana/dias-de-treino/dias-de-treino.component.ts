import { Component, OnInit } from '@angular/core';
import { SelectParamsInterface } from '../select-params.type';
import { WeekEnum } from '../week.enum';

@Component({
  selector: 'app-dias-de-treino',
  templateUrl: './dias-de-treino.component.html',
  styleUrls: ['./dias-de-treino.component.scss']
})
export class DiasDeTreinoComponent implements OnInit {
  checked: boolean = false;
  days: any[] = [];
  selectedDays: number[] = [];

  ngOnInit(): void {
    this.setUpDaysOfWeek()
  }

  onSelectDay(weekDay:number, dayName: string): void {
    if(!this.checkIfTheDayIsAlreadyInArray(weekDay)) {
      this.selectedDays.push(weekDay);
    } else {
      this.removeDayFromArray(weekDay);
    }
  }

  setUpDaysOfWeek(): void {
    WeekEnum.forEach(day => {
      this.days.push({
        weekDay: day.id,
        dayName: day.label,
        hasService: false,
        startTime: '',
        endTime: ''
      });
    });

//const timeString = "08:00";
// const [hours, minutes] = timeString.split(':').map(Number);

// const date = new Date();
// date.setHours(hours);
// date.setMinutes(minutes);

// console.log(date);

  }

  private getRandomBoolean(): boolean {
    return Math.random() < 0.5;
  }


  private checkIfTheDayIsAlreadyInArray(weekDay: number): boolean {
    return this.selectedDays.includes(weekDay);
  }

  private removeDayFromArray(weekDay: number): void {
    this.selectedDays = this.selectedDays.filter(day => day !== weekDay);
  }
}
