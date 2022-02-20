import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.services'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,   
    EventThumbnailComponent,
    EventsListComponent,
    NavBarComponent
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
