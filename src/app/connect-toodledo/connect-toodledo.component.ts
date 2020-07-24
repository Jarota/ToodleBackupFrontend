import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.tasks = false;
    this.lists = false;
    this.notes = false;
    this.outlines = false;
  }

  redirectToToodledo() {
    
  }

}
