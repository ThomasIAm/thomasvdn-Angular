import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule],
})
export class SharedModule {}
