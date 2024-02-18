import { Component, Input, SimpleChanges } from '@angular/core';
import { calEvent } from '../event';
import { EventCoreService } from '../../event-core.service';
import { Observable, BehaviorSubject, Subscriber } from 'rxjs';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent {
  constructor(private event_c: EventCoreService) { }
  events:calEvent[] = [];
  filteredEvents:calEvent[] = [];
  options:string[] = ["Add", "Edit"];
  dateToday = new Date(Date.now())
  //eventAdd = new Observable();
  
  ngOnInit():void {
    this.getEvents();
  }
  
  ngOnChanges(changes: SimpleChanges):void {
    const filter: string = changes['filterIn'].currentValue;
    if (filter === "Reset") {
      return this.resetEvents();
    }
    
    return this.filtered(filter);
  }

  getEvents(): void {
    this.event_c.getEvents().subscribe((eventsList) => {
      this.events = eventsList;
      this.filteredEvents = eventsList;
    });
  }

  /* addEvent(event:calEvent):void {
    //Event Validation Here
    let validatedEvent = event;
    this.eventAdd = new Observable((Subscriber)=>{
      Subscriber.next(validatedEvent);
    });
  } */

  resetEvents(): void {
    this.filteredEvents = this.events;
  }

  private filtered(filter: string):void {
    this.filteredEvents = this.events.filter((item) => item.category === filter)
  }
  
  
  @Input() filterIn = '';
  
}
