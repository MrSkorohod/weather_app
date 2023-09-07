import {
  ChangeDetectionStrategy,
  Component,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  private searchInputValueSubject = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  testForm = new FormGroup({
    testValue: new FormControl(''),
  });

  async getCities(cityName: string) {
    console.log('cityName: ', cityName);

    const response = await firstValueFrom(
      this.http.get<any>(
        `https://api.api-ninjas.com/v1/city?name=${cityName}`,
        {
          headers: { 'X-Api-Key': process.env['API_KEY'] as string },
        }
      )
    );

    console.log('response: ', response);
  }

  inputChange(event: any): void {
    const cityName = this.searchInputValueSubject.getValue();

    this.searchInputValueSubject.next(cityName + event?.data);

    if (cityName.length > 3) {
      this.getCities(this.searchInputValueSubject.getValue());
    }
  }
}
