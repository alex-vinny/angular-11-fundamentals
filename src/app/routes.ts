import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { CreateEventComponent } from "./events/create-event.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouterActivator } from "./events/event-details/event-router-activator.service";
import { EventsListComponent } from "./events/events-list.component";

export const appRoutes :Routes = [
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]