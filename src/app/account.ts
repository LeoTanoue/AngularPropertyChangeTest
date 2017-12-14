import { Input } from '@angular/core';

export class Account {
  constructor(accountId?: string) {
    if (accountId) {
      this.AccountID = accountId;
    }
    this.ChangeSetlist = [];
  }

  private AccountID: string;
  @Input('AccountID')
  public get accountID(): string {
    return this.AccountID;
  }
  public set accountID(value: string) {
    this.AccountID = value;
  }

  private Name: string;
  public get name(): string {
    return this.Name;
  }
  @Input('Name')
  public set name(value: string) {
    this.Name = value;
    this.ChangeSetlist.push('Name');
  }

  private DBA: string;
  public get dba(): string {
    return this.DBA;
  }
  @Input('DBA')
  public set dba(value: string) {
    this.DBA = value;
    this.ChangeSetlist.push('DBA');
  }

  private BusinessStartDate: Date;
  public get businessStartDate(): Date {
    return this.BusinessStartDate;
  }
  @Input('BusinessStartDate')
  public set businessStartDate(value: Date) {
    this.BusinessStartDate = value;
    this.ChangeSetlist.push('BusinessStartDate');
  }

  public ChangeSetlist: string[];
}
