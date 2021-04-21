import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Code, UserService } from '../user.service';

@Component({
  selector: 'app-dropboxredirect',
  templateUrl: './dropboxredirect.component.html',
  styleUrls: ['./dropboxredirect.component.css']
})
export class DropboxredirectComponent implements OnInit {

  code: Code;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.route.queryParamMap
      .subscribe( (map) => {
        this.code = { value: map.get("code") };
        if (this.code) {
          this.userService.connDropbox(this.code).subscribe(() => {});
        }
      });
  }

}
