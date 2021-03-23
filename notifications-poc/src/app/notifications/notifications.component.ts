import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Notice } from '../core/models/notice';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  @Input("notifications") notifications: Notice[];

  constructor() { }

  ngOnInit() {
  }

}
