import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuHeaderComponent } from './sidebar-menu-header.component';

describe('SidebarMenuHeaderComponent', () => {
  let component: SidebarMenuHeaderComponent;
  let fixture: ComponentFixture<SidebarMenuHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarMenuHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
