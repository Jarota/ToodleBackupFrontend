import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, Code } from '../user.service';


@Component({
  selector: 'app-toodleredirect',
  templateUrl: './toodleredirect.component.html',
  styleUrls: ['./toodleredirect.component.css']
})
export class ToodleredirectComponent implements OnInit {

  code: Code;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.route.queryParamMap
      .subscribe( (map) => {
        this.code = { value: map.get("code") };
        if (this.code) {
          this.userService.connToodledo(this.code).subscribe(() => {});
        }
    });
  }

}

