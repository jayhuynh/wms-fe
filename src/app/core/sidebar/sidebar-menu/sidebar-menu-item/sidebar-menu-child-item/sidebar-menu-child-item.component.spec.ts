import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuChildItemComponent } from './sidebar-menu-child-item.component';

describe('SidebarMenuChildItemComponent', () => {
  let component: SidebarMenuChildItemComponent;
  let fixture: ComponentFixture<SidebarMenuChildItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarMenuChildItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMenuChildItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
