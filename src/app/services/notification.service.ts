import { Injectable } from '@angular/core';
import { DomService } from '../services/dom.service';

@Injectable()
export class NotificationService {

  notificationClass: String;

  constructor( private domService: DomService) { }
  private notificationElementId = 'notification-container';

  init(component: any, inputs: object, outputs: object, notificationType: string) {
    const componentConfig = {
      inputs: inputs,
      outputs: outputs
    };
    this.notificationClass = notificationType === 'OK' ? 'alert-success' : 'alert-danger';
    this.domService.appendComponentTo(this.notificationElementId, component, componentConfig);
    document.getElementById(this.notificationElementId).className = 'show';


  }

  destroy() {
    this.domService.removeComponent();
    document.getElementById(this.notificationElementId).className = 'hidden';
  }

}
