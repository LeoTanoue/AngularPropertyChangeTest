import { Component, OnInit } from '@angular/core';
import { Account } from './account';
import { Observable } from 'rxjs/Observable';
import {  Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public account: Account;
  public form: FormGroup;
  constructor(private http: Http, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      AccountID: new FormControl(),
      Name: new FormControl(),
      DBA: new FormControl(),
      BusinessStartDate: new FormControl()
     }
  );
  }
  ngOnInit() {
    const restUrl = 'http://localhost:2756/api/Account/AccountByOppID/94211BC6-90E1-E611-80E0-00155D01E500';
    this.http.get(restUrl, { withCredentials: true }).map((res: Response) => res.json()).subscribe(
      data => {
        this.account = Object.assign(new Account(), data) as Account;
        // this.account =  data as Account;
        this.form.setValue({
          AccountID: [this.account.AccountID],
          Name: [this.account.Name],
          DBA: [this.account.DBA],
          BusinessStartDate: [this.account.BusinessStartDate]
        });
      } ,
      error => console.log(error),
      () => {
        console.log(this.account);
      }
    );
  }

  onSubmit() {
    if (this.form.dirty) {
     const updateAccount = new Account(this.account.AccountID);
      Object.keys(this.form.controls).forEach(controlName => {
        const currentControl = this.form.controls[controlName];
        if (currentControl.dirty) {
          updateAccount[controlName] = currentControl.value;
        }
      });
      this.updateAccount(updateAccount);
      // console.log('updateAccount');
      // console.log(updateAccount);
    }
  }

  updateAccount(updateAccount: Account) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers, withCredentials: true });
    this.http
    .put('http://localhost:2756/api/Account/Update/', updateAccount, options)
    .map(data => data.json() as any[])
    .subscribe(data => console.log(data));
  }
}
