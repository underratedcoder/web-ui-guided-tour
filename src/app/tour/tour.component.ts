import { Component, OnInit } from "@angular/core";
import { JoyrideService } from "ngx-joyride";

@Component({
  selector: "app-tour",
  templateUrl: "./tour.component.html",
  styleUrls: ["./tour.component.css"]
})
export class TourComponent implements OnInit {
  constructor(private readonly joyrideService: JoyrideService) {}
  ngOnInit() {}

  tour() {
    this.joyrideService.startTour(
      { steps: ["step1", "step2", "step3"] } // Your steps order
    );
  }
}
