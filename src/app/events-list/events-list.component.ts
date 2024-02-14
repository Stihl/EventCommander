import { Component } from '@angular/core';
import { calEvent } from '../event';
import { EventCoreService } from '../../event-core.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent {
  constructor(private event_c: EventCoreService) { }
  events:calEvent[] = [];

  ngOnInit():void {
    this.getEvents();
    //Filter by category?
    /* for (let event of this.events){
      console.log(event.title);
    } */
  }

  getEvents(): void {
    this.event_c.getEvents().subscribe((eventsList) => this.events = eventsList);
  }
  

  
}
