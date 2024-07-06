import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { LoginserviceService } from '../Services/loginservice.service';
import { tokenName } from '@angular/compiler';
import { TokenError } from '@angular/compiler/src/ml_parser/lexer';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth-guard/auth.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth-guard/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email: string = "admin@heraizen.com"
  // pass: string = "admin@123!"
  login: boolean = false
  loginform: FormGroup;
  logindata: string
  token: string;
  userdata: string
  errormessage: string
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

  }


  ngOnInit(): void {
    this.loginform = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  get username() {
    console.log("User name")
    return this.loginform.get('username');
  }
  get password() {
    console.log("Password")
    return this.loginform.get('password');
  }




  confirmcredentials() {
    console.log("Confirm credential")
    const userdata = this.loginform.value
    console.log('this.loginform.value', this.loginform.value)
    console.log("Confirm credential1")

    this.authService.getloginfromapi(this.loginform.value.username,this.loginform.value.password).subscribe(data =>
      {
        if(data)
        {
          this.router.navigate(['/login']); 
        }
        else{
          this.router.navigate(['/'])
        }
      }
    
      
    )

   
  }

}

