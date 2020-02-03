import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTemplateComponent } from './link-template.component';

describe('LinkTemplateComponent', () => {
  let component: LinkTemplateComponent;
  let fixture: ComponentFixture<LinkTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
