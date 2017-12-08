import { Input } from '@angular/core';

export class Account {
  constructor(accountId?: string) {
    // if (accountId) {
    //   this._accountID = accountId;
    // }
    this.ChangeSetlist = [];
  }
  AccountID;
  Name;
  DBA;
  BusinessStartDate: Date;

  // private _accountID: string;
  // @Input('AccountID')
  // get AccountID(): string {
  //   return this._accountID;
  // }
  // set AccountID(value: string) {
  //   this._accountID = value;
  // }

  // private _name: string;
  // @Input('Name')
  // get Name(): string {
  //   return this._name;
  // }
  // set Name(value: string) {
  //   this._name = value;
  //   this.ChangeSetlist.push('Name');
  // }

  // private _dba: string;
  // @Input('DBA')
  // get DBA(): string {
  //   return this._dba;
  // }
  // set DBA(value: string) {
  //   this._dba = value;
  //   this.ChangeSetlist.push('DBA');
  // }

  // private _businessStartDate: Date;
  // @Input('BusinessStartDate')
  // get BusinessStartDate(): Date {
  //   return this._businessStartDate;
  // }
  // set BusinessStartDate(value: Date) {
  //   this._businessStartDate = value;
  //   this.ChangeSetlist.push('BusinessStartDate');
  // }

  public ChangeSetlist: string[];
}
