import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: [
        './navbar.component.css'
    ]
})
export class NavBarComponent {
    constructor(private auth:AuthService) {        
    }

    isAuthenticated() : boolean {
        return this.auth.isAuthenticated()
    }

    getUserFirstName() {
        return this.auth.currentUser?.firstName;
    }
}