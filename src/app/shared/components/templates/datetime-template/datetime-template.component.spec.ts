import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimeTemplateComponent } from './datetime-template.component';

describe('DatetimeTemplateComponent', () => {
  let component: DatetimeTemplateComponent;
  let fixture: ComponentFixture<DatetimeTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetimeTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
