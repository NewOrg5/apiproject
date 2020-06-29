import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginserviceService } from '../Services/loginservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  email:string="admin@123"
  pass:string="admin"
  login:boolean=false
loginform:FormGroup
  constructor( private loginservice : LoginserviceService,private fb:FormBuilder) { }
  


  ngOnInit(): void {
    this.loginform=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  get username()
{
  return this.loginform.get('username');
}
get password()
{
  return this.loginform.get('password');
}

confirmcredentials(){
  
  this.loginservice.getloginfromapi().subscribe(data=>
    {
      console.log(data)
    })
  if(this.username.value==this.email&&this.password.value==this.pass)
  {
  this.login=true;
  }
  else{
    this.login=false
  }
}
}
