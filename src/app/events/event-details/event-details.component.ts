import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "..";
import { ISession } from "../shared";
import { EventService } from "../shared/event.service";

// Route:
//// event/{id}
@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    event :IEvent | undefined
    addMode: boolean = false
    filterBy: string = 'all'

    constructor(private eventService :EventService, private route :ActivatedRoute) {        
    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id']
        this.event = this.eventService.getEvent(id)
    }

    addSession() {
        this.addMode = true
    }

    saveNewSession(session:ISession) {
        if(this.event) {
            const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
            session.id = nextId + 1
            this.event.sessions.push(session)
            this.eventService.updateEvent(this.event)
        }
        this.addMode = false
    }

    cancelAddSession() {
        this.addMode = false
    }
}