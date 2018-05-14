import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-added-notification',
  templateUrl: './added-notification.component.html',
  styleUrls: ['./added-notification.component.scss']
})
export class AddedNotificationComponent implements OnInit {

  constructor(private notificationService: NotificationService) {
    setTimeout(() => {
      this.notificationService.destroy();
    }, 2500);
   }

  ngOnInit() {
  }

  close() {
    this.notificationService.destroy();
  }

}
