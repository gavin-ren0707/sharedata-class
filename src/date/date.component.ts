import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './date.component.html',
  styleUrls: [ './date.component.css' ]
})
export class DateComponent  {
  name = 'Angular ' + VERSION.major;
}
