import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  @Input() value!: string;
  @Output() valueChange = new EventEmitter<string>();

  inputChange(searchValue: Event) {
    const inputValue = (searchValue.target as HTMLInputElement).value;
    this.valueChange.emit(inputValue);
  }
}
