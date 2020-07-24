import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../user";
import { UserService, ToodleInfo } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;
  connectToodledo: Boolean;
  connectDropbox: Boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.user = {
      username: "",
      frequency: "",
      toodledo: {token: "", refresh: "", toBackup: []},
      clouds: [],
    };

    this.connectToodledo = true;
    this.connectDropbox = true;

    this.userService.getUser().subscribe( (response: any) => {      
      this.user = response;

      this.connectToodledo = this.user.toodledo.token == "";
      this.connectDropbox = this.user.clouds == [];

    });

  }

  goToConnectToodledo() {
    this.router.navigateByUrl('/connectToodledo');    
  }

}
