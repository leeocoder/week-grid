export interface GridWeekInterface {
  sunday: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  custom_times: true;
  custom_weekdays: true;
  grid_training_horary: GridTrainingHorary[];
}

export interface GridTrainingHorary {
  grid_training_id: number;
  horary: string;
  weekday: number;
}
