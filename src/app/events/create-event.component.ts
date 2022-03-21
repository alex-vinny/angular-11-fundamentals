import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared";

@Component({
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
    isDirty:boolean = false
    newEvent:any = {}

    constructor(private router: Router, private eventService:EventService) {
    }

    saveEvent(formValues:any) {
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }

    cancel() :void {
        this.router.navigate(['/events'])
    }
}