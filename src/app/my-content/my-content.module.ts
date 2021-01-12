import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyContentComponent } from './my-content.component';
import { AngularSplitModule } from 'angular-split';
import { JoyrideModule } from 'ngx-joyride';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AngularSplitModule,
    JoyrideModule,
    RouterModule
  ],
  declarations: [MyContentComponent],
  exports: [ MyContentComponent ]
})
export class MyContentModule { }