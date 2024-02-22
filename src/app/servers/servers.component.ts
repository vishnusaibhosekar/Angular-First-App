import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'Click to create new Server';
  placeholderServerName = 'Enter Server Name';
  serverName = 'Test Server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    if (this.serverName === '') {
      this.serverCreationStatus = 'Enter a valid name';
      return;
    }
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
