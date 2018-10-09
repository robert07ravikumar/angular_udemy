import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: '.app-servers',
  //template: `<app-server></app-server>
  //<app-server></app-server>`,
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  isNewServerAdditionEnabled = false;
  serverCreationStatus = 'server not created yet';
  serverName = 'test server';

  constructor() {
    setTimeout(() => {
      this.isNewServerAdditionEnabled = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server created';
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
