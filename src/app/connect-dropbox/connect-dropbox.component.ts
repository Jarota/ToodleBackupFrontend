import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-connect-dropbox',
  templateUrl: './connect-dropbox.component.html',
  styleUrls: ['./connect-dropbox.component.css']
})
export class ConnectDropboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirectToDropbox() {

    const path = "https://www.dropbox.com/oauth2/authorize?";
    const client_id = "client_id=n731o7jng2knpkq&";
    const redirect_uri = "redirect_uri=" + environment.gateway.slice(0, -4) + "/dropboxredirect&";
    // const redirect_uri = "redirect_uri=https://localhost:8080/dropboxredirect&";
    const response_type = "response_type=code&";
    const token_access_type = "token_access_type=offline";
    
    const url: string = path + client_id + redirect_uri + response_type + token_access_type;
    window.location.href = url;
    
  }

}
