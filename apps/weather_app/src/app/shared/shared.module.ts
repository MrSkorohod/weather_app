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

@NgModule({
  declarations: [SearchBarComponent, WeatherBlockComponent, DayTimePipe],
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
