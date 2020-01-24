import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHeaderBreadcrumbItemComponent } from './content-header-breadcrumb-item.component';

describe('ContentHeaderBreadcrumbItemComponent', () => {
  let component: ContentHeaderBreadcrumbItemComponent;
  let fixture: ComponentFixture<ContentHeaderBreadcrumbItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentHeaderBreadcrumbItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHeaderBreadcrumbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
