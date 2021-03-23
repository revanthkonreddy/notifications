import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotificationsComponent } from "./notifications.component";
import { NotificationItemComponent } from "./notification-item/notification-item.component";
import { SharedModule } from "../shared/shared.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [CommonModule, SharedModule, MomentModule, FlexLayoutModule],
  declarations: [NotificationsComponent, NotificationItemComponent],
  exports: [NotificationsComponent]
})
export class NotificationsModule {}
