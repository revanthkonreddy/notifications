import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar.component";
import { SharedModule } from "../shared/shared.module";
import { NotificationsModule } from "../notifications/notifications.module";

@NgModule({
  imports: [CommonModule, SharedModule, NotificationsModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule {}
