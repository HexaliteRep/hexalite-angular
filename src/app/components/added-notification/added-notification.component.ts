import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-added-notification',
  templateUrl: './added-notification.component.html',
  styleUrls: ['./added-notification.component.scss']
})
export class AddedNotificationComponent implements OnInit {

  notificationClass: String;

  constructor(private notificationService: NotificationService) {
    setTimeout(() => {
      this.notificationService.destroy();
    }, 2500);
   }

  ngOnInit() {
    this.notificationClass = this.notificationService.notificationClass;
  }

  close() {
    this.notificationService.destroy();
  }

}
