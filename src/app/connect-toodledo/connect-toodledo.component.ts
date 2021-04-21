import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-connect-toodledo',
  templateUrl: './connect-toodledo.component.html',
  styleUrls: ['./connect-toodledo.component.css']
})
export class ConnectToodledoComponent implements OnInit {

  tasks: Boolean;
  lists: Boolean;
  notes: Boolean;
  outlines: Boolean;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.tasks = false;
    this.lists = false;
    this.notes = false;
    this.outlines = false;
  }

  redirectToToodledo() {
    
    let bools: Boolean[] = [this.tasks, this.lists, this.notes, this.outlines];
    const strings: string[] = ["tasks", "lists", "notes", "outlines"];

    this.userService.getRandomString().subscribe(
      (resp: any) => {
        let url: string = "https://api.toodledo.com/3/account/authorize.php?response_type=code&client_id=toodlebackup&state=" + resp.state +"&scope=";
    
        let first: Boolean = true;
        
        for( let i = 0; i < 4; i++) {
          if( bools[i] === true ) {
            if(first === true) {
              url += strings[i];
              first = false;
            } else {
              url += "%20" + strings[i];
            }
          }
        }
        window.location.href = url;
      }
    )

  }

}
