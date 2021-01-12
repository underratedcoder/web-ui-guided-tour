import { Component, OnInit } from '@angular/core';
import { JoyrideService } from 'ngx-joyride';

@Component({
  selector: 'app-my-content',
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.css']
})
export class MyContentComponent implements OnInit {

  constructor(private readonly joyrideService: JoyrideService) { }

  ngOnInit() {
  }

  tour2()
  {
    this.joyrideService.startTour(
      { steps: ['tour2Step1', 'tour2Step2', 'tour2Step4']} // Your steps order
    );
  }

}