import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id = '8d5c064a3c2310743c92';
  private client_secret = '712028ff7b66e37e06c2bf4884da6eb824dc4371';

  constructor(private _http: Http) {
    console.log('Github Service Ready...');
    this.username = 'emiliogozo';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  updateUser(username:string) {
    this.username = username;
  }
}