import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-connect-dropbox',
  templateUrl: './connect-dropbox.component.html',
  styleUrls: ['./connect-dropbox.component.css']
})
export class ConnectDropboxComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  redirectToDropbox() {
    
  }

}
