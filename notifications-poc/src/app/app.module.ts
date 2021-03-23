import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { NavbarModule } from "./navbar/navbar.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
