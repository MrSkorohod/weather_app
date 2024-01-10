import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {
  TuiDataListModule,
  TuiFlagPipeModule,
  TuiLoaderModule,
  TuiRootModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { WeatherBlockComponent } from './weather-block/weather-block.component';
import { DayTimePipe } from '../core/pipes/day-time.pipe';
import { WeatherInfoTableComponent } from './weather-info-table/weather-info-table.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    WeatherBlockComponent,
    DayTimePipe,
    WeatherInfoTableComponent,
  ],
  exports: [SearchBarComponent, WeatherBlockComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TuiInputModule,
    HttpClientModule,
    TuiDataListModule,
    TuiRootModule,
    TuiTextfieldControllerModule,
    TuiSvgModule,
    TuiDataListModule,
    TuiFlagPipeModule,
    TuiIslandModule,
    TuiLoaderModule,
  ],
})
export class SharedModule {}
