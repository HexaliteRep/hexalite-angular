import { Injectable } from '@angular/core';
import { DomService } from '../services/dom.service';

@Injectable()
export class NotificationService {

  constructor( private domService: DomService) { }
  private notificationElementId = 'notification-container';

  init(component: any, inputs: object, outputs: object) {
    const componentConfig = {
      inputs: inputs,
      outputs: outputs
    };

    this.domService.appendComponentTo(this.notificationElementId, component, componentConfig);
    document.getElementById(this.notificationElementId).className = 'show';


  }

  destroy() {
    this.domService.removeComponent();
    document.getElementById(this.notificationElementId).className = 'hidden';
  }

}
