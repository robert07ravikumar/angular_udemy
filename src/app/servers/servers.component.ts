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

  constructor() { 
    setTimeout(() => {
      this.isNewServerAdditionEnabled = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
