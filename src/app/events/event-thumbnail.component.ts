import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: [
    './event-thumbnail.component.css'
  ]
})
export class EventThumbnailComponent {
  @Input() event: any

  getStartTimeClass() : any {
    return this.getStartTimeClassArray()
  }

  getStartTimeClassObject() : any {
    const isEarlyStart = this.event && this.event.time === '8:00 am'

    return {
      green: isEarlyStart,
      bold: isEarlyStart
    }
  }

  getStartTimeClassString() : string {
    if(this.event && this.event.time === '8:00 am')
      return 'green bold';
    
    return ''
  }

  getStartTimeClassArray() : Array<string> {
    if(this.event && this.event.time === '8:00 am')
      return ['green', 'bold'];
    
    return []
  }
}
