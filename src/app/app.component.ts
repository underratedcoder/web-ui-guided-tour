import { Component, NgModule, OnInit, TemplateRef } from "@angular/core";
import { JoyrideService } from "ngx-joyride";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // name = "Angular";
  // public content;
  modelRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private readonly joyrideService: JoyrideService
  ) {}

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modelRef = this.modalService.show(template);
  }
}
