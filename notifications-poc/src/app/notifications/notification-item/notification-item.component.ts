import { Component, OnInit, Input } from '@angular/core';
import { Notice } from '../../core/models/notice';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss']
})
export class NotificationItemComponent implements OnInit {

  @Input("notification") notice: Notice;

  constructor() { }

  avatarsUrl(avatarName){
    return 'assets/images/avatars/' + avatarName;
  }

  ngOnInit() {
  }

}
