export class SidebarMenuChildItemModel {
  private icon: string;
  private title: string;
  private routerLink: string;
  private children: SidebarMenuChildItemModel[];

  constructor(routerLink: string, icon: string, title: string, children: SidebarMenuChildItemModel[]) {
    this.icon = icon;
    this.title = title;
    this.children = children;
    this.routerLink = routerLink;
  }

  getIcon() {
    return this.icon;
  }

  setIcon(icon: string) {
    this.icon = icon;
  }

  getRouterLink() {
    return this.routerLink;
  }

  setRouterLink(routerLink: string) {
    this.routerLink = routerLink;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title: string) {
    this.title = title;
  }

  getChildren() {
    return this.children;
  }

  addChildren(child: SidebarMenuChildItemModel) {
    this.children.push(child);
  }
}
