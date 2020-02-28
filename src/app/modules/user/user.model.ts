export class User {
  private _email: string;
  private _password: string;
  private _fullName: string;
  private _role: string;

  constructor(email: string, password: string, fullName: string, role: string) {
    this._email = email;
    this._password = password;
    this._fullName = fullName;
    this._role = role;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }
}
