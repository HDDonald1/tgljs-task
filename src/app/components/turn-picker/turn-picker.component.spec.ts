import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnPickerComponent } from './turn-picker.component';

describe('TurnPickerComponent', () => {
  let component: TurnPickerComponent;
  let fixture: ComponentFixture<TurnPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
