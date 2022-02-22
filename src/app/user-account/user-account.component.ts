import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../custom-classes/User';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  userList:User[];

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(data=>{this.userList = data; }
    //error=>console.log(error)
    );
  }
 
  onSelectPrimary(username:string){
      this.router.navigate(['/primaryTransaction', username]);
  }
  onSelectSavings(username:string){
      this.router.navigate(['/savingsTransaction', username]);
  }

  enableUser(username:string){
    this.userService.enableUser(username).subscribe();
    location.reload();
  }

  disableUser(username:string){
    this.userService.disableUser(username).subscribe();
    location.reload();
  }


 

}
