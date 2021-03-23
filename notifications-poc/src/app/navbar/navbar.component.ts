import { Component, OnInit } from "@angular/core";
import { Notice } from "../core/models/notice";
import * as _ from "lodash";
import { UsersFakeDb } from "../fake-db/users-db";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  allNotices: Notice[];

  currentTab = "Current";
  noticeOffsets = {
    Current: 0,
    Others: 0
  };
  noticesByStudy = {
    Current: new Array<Notice>(),
    Others: new Array<Notice>()
  };
  noticeLimit = 5;
  notificationsCount = 0;

  stopClickPropagate(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }

  markAllAsRead(event){
    event.stopPropagation();
    event.preventDefault();

    this.allNotices.forEach((notice: Notice) => {
      if (!notice.isRead) notice.isRead = true;
    });

    this.notificationsCount = 0;
  }

  previousNotices(event){
    event.stopPropagation();
    event.preventDefault();

    this.noticeOffsets[this.currentTab] -= 5;

    if(this.noticeOffsets[this.currentTab] < 0){
      this.noticeOffsets[this.currentTab] = 0;
    }

    this.noticesByStudy[this.currentTab] = this.getNoticesByStudy(this.currentTab, this.noticeOffsets[this.currentTab]);
  }

  nextNotices(event){
    event.stopPropagation();
    event.preventDefault();

    this.noticeOffsets[this.currentTab] += 5;
    this.noticesByStudy[this.currentTab] = this.getNoticesByStudy(this.currentTab, this.noticeOffsets[this.currentTab]);
  }

  onSelectedTabChange(e){
    this.currentTab = e.tab.textLabel;
  }

  generateRandomNotices() {
    this.allNotices = new Array<Notice>();
    let allUsers = UsersFakeDb.users;
    let allStudies = [
      "Current",
      "Shopping Study",
      "Concept Reviews",
      "Insight Community"
    ];
    let allRead = [true, false];
    let allActions = ["liked", "commented"];
    let allSubjects = ["post", "activity", "reply", "response"];
    let allTopics = [
      "Online Shopping",
      "Shopping Preferences",
      "Package Concept C",
      "Retial Journal",
      "ABC Topic",
      "Study FAQ",
      "Weekly Journal"
    ];

    for (var i = 0; i < 30; i++) {
      let notice = new Notice();
      notice.user = allUsers[(allUsers.length * Math.random()) | 0];
      notice.isRead = allRead[(allRead.length * Math.random()) | 0];
      notice.study = allStudies[(allStudies.length * Math.random()) | 0];
      notice.action = allActions[(allActions.length * Math.random()) | 0];
      notice.subject = allSubjects[(allSubjects.length * Math.random()) | 0];
      notice.topic = allTopics[(allTopics.length * Math.random()) | 0];
      notice.timestamp = new Date(
        +new Date() - Math.floor(Math.random() * 10000000000)
      );

      this.allNotices.push(notice);
    }

    this.notificationsCount = this.getUnreadNoticesCount();
  }

  getNoticesByStudy(study, offset) {
    let notices = new Array<Notice>();

    notices = _.filter(this.allNotices, (notice: Notice) => {
      if (study === "Current") {
        return notice.study === "Current";
      } else {
        return notice.study !== "Current";
      }
    });

    notices = _.slice(notices, offset, 5);

    return notices;
  }

  constructor() {}

  ngOnInit() {
    this.generateRandomNotices();
    this.noticesByStudy.Current = this.getNoticesByStudy('Current', 0);
    this.noticesByStudy.Others = this.getNoticesByStudy('Others', 0);
  }

  getUnreadNoticesCount() {
    let count = 0;

    this.allNotices.forEach((notice: Notice) => {
      if (!notice.isRead) count++;
    });

    return count;
  }
}
