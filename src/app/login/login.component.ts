import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn:boolean;
  username:string;
  password:string;

  constructor(private loginService: LoginService) { 
      if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null){
        this.loggedIn = false;
      }else{
        this.loggedIn = true;
      }
  }

  onSubmit(){
    
    this.loginService.sendCredential(this.username, this.password).subscribe(
      res=>{
        this.loggedIn=true;
        localStorage.setItem('PortalAdminHasLoggedIn','true');
        location.reload();
      },
      err => console.log(err)
    );
    //alert("hhi");return false;
  }

  ngOnInit(): void {
  }
 
  onTest(){
    if(this.username == 'demo' && this.password=='password'){
      this.loggedIn=true;
      localStorage.setItem('PortalAdminHasLoggedIn','true');
      location.reload();
    }
  }


}
