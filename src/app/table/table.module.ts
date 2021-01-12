import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import {TableModule as PrimeTableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    PrimeTableModule
  ],
  declarations: [TableComponent],
  exports: [ TableComponent ]
})
export class TableModule { }