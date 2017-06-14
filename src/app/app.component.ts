import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  blue:boolean;

  constructor(){
    this.blue = true;
  }

  @ViewChild('htag') timeline;  
  ngAfterViewInit () {
    console.log(this.timeline);
  }

  blueClick()
  {
    if(this.blue)
    this.blue = false;
    else
    this.blue = true;
  }
}
