import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../shared/event.services";

// Route:
//// event/{id}
@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    event :any
    constructor(private eventService :EventService, private route :ActivatedRoute) {        
    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id']
        this.event = this.eventService.getEvent(id)
    }
}