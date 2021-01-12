import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModalModule } from "ngx-bootstrap/modal";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ContentLoaderModule } from "@netbasal/content-loader";
import { MyContentModule } from "./my-content/my-content.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { JoyrideModule } from "ngx-joyride";
import { ToastrModule } from "ngx-toastr";
import { TableModule } from "./table/table.module";
import { TourComponent } from './tour/tour.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ContentLoaderModule,
    MyContentModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    JoyrideModule.forRoot(),
    RouterModule.forRoot([]),
    TableModule,
    ModalModule.forRoot()
  ],
  declarations: [AppComponent, HelloComponent, TourComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
