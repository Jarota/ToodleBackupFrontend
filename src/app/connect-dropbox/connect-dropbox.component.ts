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

    var path = "https://www.dropbox.com/oauth2/authorize?";
    var client_id = "client_id=n731o7jng2knpkq&";
    var redirect_uri = "redirect_uri=https://localhost:8080/dropboxredirect&";
    
    var url: string = path + client_id + redirect_uri + "response_type=code";
    window.location.href = url;
    
  }

}
