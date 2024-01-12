import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { SharedModule } from '../shared.module';
import { By } from '@angular/platform-browser';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [SharedModule],
    });

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have static placeholder', () => {
    const taigaInput = fixture.nativeElement.querySelector('tui-input');
    expect(taigaInput.textContent).toContain('Choose you city');
  });

  it('should correctly render the passed @Input value', () => {
    component.value = 'Test value';

    fixture.detectChanges();

    expect(fixture.componentInstance.value).toEqual('Test value');
  });

  it('should input event work correctly', () => {
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input'));
    const elem = input.nativeElement;

    expect(elem.value).toBe('');

    elem.value = 'Test value';
    elem.dispatchEvent(new Event('input'));

    expect(fixture.componentInstance.value).toBe('Test value');
  });

  it('should emit value', () => {
    spyOn(component.valueChange, 'emit');

    const input = fixture.debugElement.query(By.css('tui-input'));

    input.triggerEventHandler('input', {
      target: { value: 'Input Test Value' },
    });

    fixture.detectChanges();

    expect(component.valueChange.emit).toHaveBeenCalled();
    expect(component.valueChange.emit).toHaveBeenCalledWith('Input Test Value');
  });
});
