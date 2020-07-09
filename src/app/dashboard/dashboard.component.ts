import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.user = {
      name: "",
      frequency: "",
      toBackup: []
    };

    this.userService.getUser().subscribe( (u: User) => {
      this.user = u;
    });
  }

}
