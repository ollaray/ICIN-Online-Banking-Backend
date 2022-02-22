import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  sendCredential(username:string, password:string){
    let url = 'http://localhost:9090/index';
    let param = 'username='+username+'&password='+password;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(url,param,{headers:headers, withCredentials:true,responseType:'text'});

  }

  logout(){
    let url = 'http://localhost:9090/logout';
    
    return this.http.get(url, {withCredentials:true,responseType:'text'});
  }
}
