import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverId=123;
  ServerStatus="No Server was created";

  constructor() {
    this.ServerStatus=Math.random()>0.5?'online':'offline'
   }

  ngOnInit() {
  }
getServerStatus(){
return this.ServerStatus;
}
getColor(){
 return this.ServerStatus === 'online'?'red':'green';
}
}