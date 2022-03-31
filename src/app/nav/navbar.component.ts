import { Component } from "@angular/core";
import { EventService, ISession } from "../events";
import { AuthService } from "../user/auth.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: [
        './navbar.component.css'
    ]
})
export class NavBarComponent {
    searchTerm: string = ""
    foundSession: ISession[] = []

    constructor(private auth: AuthService, private eventService: EventService) {
    }

    isAuthenticated() : boolean {
        return this.auth.isAuthenticated()
    }

    getUserFirstName() {
        return this.auth.currentUser?.firstName;
    }

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm)
            .subscribe(sessions => {
                this.foundSession = sessions
            })
    }
}