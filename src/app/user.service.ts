import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './custom-classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    let url = "http://localhost:9090/api/user/all";
    return this.http.get<User[]>(url,{withCredentials:true,responseType:'json'});
  }

  getPrimaryTransactionList(username:string){
     let url = "http://localhost:9090/api/user/primary/transaction?username="+username;
     return this.http.get(url, {withCredentials:true, responseType:'json'});
  }
  
  getSavingsTransactionList(username:string){
    let url = "http://localhost:9090/api/user/savings/transaction?username="+username;
    return this.http.get(url, {withCredentials:true, responseType:'json'});
  }

  enableUser(username:string){
    let url = "http://localhost:9090/api/user/"+username+"/enable";
    return this.http.get(url, {withCredentials:true, responseType:'json'});

  }

  disableUser(username:string){
    let url = "http://localhost:9090/api/user/"+username+"/disable";
    return this.http.get(url, {withCredentials:true, responseType:'json'});

  }



}
