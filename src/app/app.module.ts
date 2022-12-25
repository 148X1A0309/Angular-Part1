import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { DirectivesComponent } from './Assignment/directives/directives.component';
import { StructuralDirectivesComponent } from './Assignment/structural-directives/structural-directives.component';
import { ServerComponent } from './Server/server/server.component';
import { ServersComponent } from './Servers/servers/servers.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,ServerComponent,ServersComponent,DirectivesComponent,StructuralDirectivesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
