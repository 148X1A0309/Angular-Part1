import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServerComponent } from './Server/server/server.component';
import { ServersComponent } from './Servers/servers/servers.component';
import { DirectivesComponent } from './Assignment/directives/directives.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,ServerComponent, ServersComponent,DirectivesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
