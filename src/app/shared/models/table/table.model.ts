export class TableModel {
  private _name: string;
  private _columns: Array<{name: string, value: string}>;
  private _rows: any[];

  constructor(name: string, columns: Array<{ name: string; value: string }>, rows: any[]) {
    this._name = name;
    this._columns = columns;
    this._rows = rows;
  }

  get columns(): Array<{ name: string; value: string }> {
    return this._columns;
  }

  set columns(value: Array<{ name: string; value: string }>) {
    this._columns = value;
  }

  get rows(): any[] {
    return this._rows;
  }

  set rows(value: any[]) {
    this._rows = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
