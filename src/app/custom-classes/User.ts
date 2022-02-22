
export class User{
    username:string;
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
    primaryAccount:{id:any, accountNumber:string, accountBalance:string};
    savingsAccount:{id:any, accountNumber:string, accountBalance:string};
    enabled:boolean;

}