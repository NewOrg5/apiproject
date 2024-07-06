import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-guard/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    console.log("Header")
  }
username=localStorage.getItem("email")
logout(){
  this.authservice.logOut()
  this.router.navigate(['/logout'])
}
}
