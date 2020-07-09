import { Component, OnInit } from '@angular/core';
import { UserService, Credentials } from "../user.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  creds: Credentials;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.creds = { username: "", password: "" };
  }

  register() {
    this.userService.registerUser(this.creds);
  }

}
