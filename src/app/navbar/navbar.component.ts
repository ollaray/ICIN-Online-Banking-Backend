import { LoginService } from '../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn:boolean;
  constructor(private loginService: LoginService, private router: Router) { 
      if(localStorage.getItem('PortalAdminHasLoggedIn') == ''){
          this.loggedIn = false;
      }else{
          this.loggedIn = true;
      }

  }
  logout(){
    this.loggedIn = false;
    localStorage.setItem('PortalAdminHasLoggedIn','');
    localStorage.clear();
    // this.loginService.logout().subscribe(
    //   res=>{
    //     localStorage.setItem('PortalAdminHasLoggedIn','');
    //   },
    //   err=>console.log(err)
    // );
     location.reload();
    this.router.navigate(['/login'])
  }

  getDisplay(){
    if(!this.loggedIn){
      return "none";
    }else{
      return "";
    }

  }

  ngOnInit(): void {
  }

 
  

}
