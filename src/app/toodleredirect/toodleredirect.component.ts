import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-toodleredirect',
  templateUrl: './toodleredirect.component.html',
  styleUrls: ['./toodleredirect.component.css']
})
export class ToodleredirectComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( (params) => {
      this.userService.connToodledo(params['code'])
    });
  }

}
