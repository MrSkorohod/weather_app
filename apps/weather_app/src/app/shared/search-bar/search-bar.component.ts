import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { GeoCityData } from '../../core/models/cities.mode';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  @Input() value!: string | null;
  @Input() dataList!: GeoCityData[] | null;
  @Output() valueChange = new EventEmitter<string>();
  @Output() itemSelected = new EventEmitter<GeoCityData>();

  inputChange(searchValue: Event) {
    const inputValue = (searchValue.target as HTMLInputElement).value;
    this.valueChange.emit(inputValue);
  }

  onSelected(item: GeoCityData): void {
    this.itemSelected.emit(item);
  }
}
