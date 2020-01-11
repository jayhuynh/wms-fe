import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSearchBoxComponent } from './sidebar-search-box.component';

describe('SidebarSearchBoxComponent', () => {
  let component: SidebarSearchBoxComponent;
  let fixture: ComponentFixture<SidebarSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
