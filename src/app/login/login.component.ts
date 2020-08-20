import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, Credentials } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credentials;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.creds = { username: "", password: "" };
  }

  login() {
    this.userService.loginUser(this.creds);
  }

}
