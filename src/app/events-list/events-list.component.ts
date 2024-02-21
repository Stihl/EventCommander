import { Component, Input, SimpleChanges } from '@angular/core';
import { calEvent } from '../event';
import { EventCoreService } from '../../event-core.service';
import { Observable, BehaviorSubject, Subscriber, of } from 'rxjs';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent {
  
  constructor(private event_c: EventCoreService) { }

  events:calEvent[] = [];
  filteredEvents:calEvent[] = [];
  dateToday = new Date(Date.now())
  
  
  ngOnInit():void {
    this.getEvents();
  }
  /*
  pushEvent(): Observable<calEvent> {
    const newEvent = of({
      
        id: 20,
        title: "Event "+ 20,
        description: `Description of event ${20}`,
        category: "Hobby",
        eventDate: new Date(Date.now() * (Math.random()*1.5))
      
    });
    return newEvent;
  }
  */
  
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

  /*
  addEvent():void{
    console.log("Did")
    this.event_c.activatedSubject.next({
      id: 20,
      title: "Event "+ 20,
      description: `Description of event ${20}`,
      category: "Hobby",
      eventDate: new Date(Date.now() * (Math.random()*1.5))
    });
    
  }
  */

  //Using setter NON-Observable
  addEvent():void{
    this.event_c.setEvent({
      id: 20,
      title: "Event "+ 20,
      description: `Description of event ${20}`,
      category: "Work",
      eventDate: new Date(Date.now() * (Math.random()*1.5))
    });
  }


  editEvent(){

  }
  deleteEvent(){

  }
  resetEvents(): void {
    this.filteredEvents = this.events;
  }

  private filtered(filter: string):void {
    this.filteredEvents = this.events.filter((item) => item.category === filter)
  }
  
  
  @Input() filterIn = '';
  
}
