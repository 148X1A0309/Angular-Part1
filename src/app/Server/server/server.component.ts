import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
serverId:number =10;
serverStatus:string="offline";
allowServer=false;
ServerStatus="No Server was created";
ServerName="Chandu"


  constructor() { 
    setTimeout(()=>{
      this.allowServer=true;
    },2000);
  }

  ngOnInit() {
  }
  getServerStatus(){
    return this.serverStatus;
  }
  AddedServer(){
    this.ServerStatus="Server was created";
  }

  onUpdateServerName(event:any){
 console.log(event);
 this.ServerName=(<HTMLInputElement>event.target).value
  }
}