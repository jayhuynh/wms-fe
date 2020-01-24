import {SidebarMenuItemModel} from '../sidebar/sidebar-menu-item.model';

export class ContentHeaderModel {
  private _title: string;
  private _smallTitle: string;
  private _breadcrumb: Array<{routerLink: string, title: string}>;

  constructor(title: string, smallTitle: string, breadcrumb: Array<{routerLink: string, title: string}>) {
    this._title = title;
    this._smallTitle = smallTitle;
    this._breadcrumb = breadcrumb;
  }


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get smallTitle(): string {
    return this._smallTitle;
  }

  set smallTitle(value: string) {
    this._smallTitle = value;
  }

  get breadcrumb(): Array<{routerLink: string, title: string}> {
    return this._breadcrumb;
  }

  set breadcrumb(value: Array<{routerLink: string, title: string}>) {
    this._breadcrumb = value;
  }

  addBreadcrumbItem(item: { routerLink: string, title: string }) {
    this._breadcrumb.push(item);
  }
}
