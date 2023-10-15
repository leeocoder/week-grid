import { Component, OnInit } from '@angular/core';
import { weekDays } from '../../weekDays.enum';
import { SelectParamsInterface } from 'src/app/selectParams.interface';
import { HorariosDaSemanaService } from 'src/app/horarios-da-semana.service';

@Component({
  selector: 'app-dias-de-treino',
  templateUrl: './dias-de-treino.component.html',
  styleUrls: ['./dias-de-treino.component.scss'],
})
export class DiasDeTreinoComponent implements OnInit {
  week: SelectParamsInterface[] = [];

  constructor(public service: HorariosDaSemanaService) {}

  ngOnInit() {
    this.populateWeek();
  }

  populateWeek(): void {
    Object.values(weekDays).forEach((item) => {
      this.week.push(item);
    });
  }

  checkDays() {
    console.log(this.service.showChosenDays);
  }
}
