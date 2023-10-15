import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiasDaSemanaComponent } from './dias-da-semana/dias-da-semana.component';
import { DiasDeTreinoComponent } from './dias-da-semana/dias-de-treino/dias-de-treino.component';
import { HorariosDeTreinoComponent } from './dias-da-semana/horarios-de-treino/horarios-de-treino.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    DiasDaSemanaComponent,
    DiasDeTreinoComponent,
    HorariosDeTreinoComponent
  ],
  imports: [
    BrowserModule,
    InputSwitchModule,
    ReactiveFormsModule,FormsModule,
    SelectButtonModule,
    AppRoutingModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
