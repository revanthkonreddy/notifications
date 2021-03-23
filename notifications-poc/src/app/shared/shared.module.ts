import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatTabsModule,
  MatListModule,
  MatBadgeModule,
  MatTooltipModule
} from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTabsModule,
    MatListModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTabsModule,
    MatListModule,
    MatBadgeModule
  ],
  declarations: []
})
export class SharedModule { }
