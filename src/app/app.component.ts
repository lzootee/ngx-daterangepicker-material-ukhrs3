import { Component } from '@angular/core';
 import moment from 'moment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  selected;
  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment(), moment()],
    'Last 7 Days': [moment(), moment()],
    'Last 30 Days': [moment(), moment()],
    'This Month': [moment(), moment()],
    'Last Month':[moment(), moment()],
  }
  getMinDate(): any { return moment().subtract(1, 'years').add(1, 'days'); } 
  getMaxDate(): any { return moment(); }
}
