import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.services";

// Route:
//// event/{id}
@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    event :any
    constructor(private eventService: EventService) {        
    }

    ngOnInit(): void {
        this.event = this.eventService.getEvent(1)
    }
}