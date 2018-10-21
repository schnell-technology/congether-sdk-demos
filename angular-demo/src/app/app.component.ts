import { Component } from '@angular/core';
import * as congether from '@schnell.technology/congether-sdk-angular6';
import { EndpointLogEvent } from '@schnell.technology/congether-sdk-angular6/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';

  constructor(private congetherSvc : congether.CongetherAngularClient)
  {
    this.startCongether();
  }

  async startCongether()
  {
    this.congetherSvc.initialize("test","http://localhost","VvTgcJIa8I06g7Qn", "GQkjHL3WO2IQBBGjn4i0ltWrSe8SMBSv0dBagtqTWJr9JZGE", null, null);
    var value = await this.congetherSvc.conductor.getConfigurationValue("simple", "nothing here - sorry");
    alert(value);
  }
}
