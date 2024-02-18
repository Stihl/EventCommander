import { Injectable } from '@angular/core';
import { calEvent } from './app/event';
import { Observable, Subscription, of } from 'rxjs';
import { EventsListComponent } from './app/events-list/events-list.component';

@Injectable({
  providedIn: 'root'
})

export class EventCoreService {

  constructor() { 
    for(let x:number= 0; x < 10; x++){
      let eventOne:calEvent = {
        id: x,
        title: "Event "+x,
        description: `Description of event ${x}`,
        category: "Hobby",
        eventDate: new Date(Date.now() * (Math.random()*1.5))
      }
      this.events.push(eventOne);
      
    }
  }
  events:calEvent[] = [];

  ngOnInit(): void{
    
  }

/*   newEvent():void {
    this.eventListComp.addEvent().subscribe((Subscription)=>{
      subscribeOn
    })
    this.events.push(event);
    let tempEvent = of(event);
    
  } */

  getEvents(): Observable<calEvent[]> {
    const eventsList = of(this.events);
    return eventsList
  }


}
