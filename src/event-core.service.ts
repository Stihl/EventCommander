import { Injectable } from '@angular/core';
import { calEvent } from './app/event';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventCoreService {

  constructor() { 
    for(let x:number= 0; x < 5; x++){
      let eventOne:calEvent = {
        id: x,
        title: "Event"+x,
        description: `Description of event ${x}`,
        category: "Hobby",
        eventDate: Date.now()
      }
      this.events.push(eventOne);
    }
  }
  events:calEvent[] = [];

  ngOnInit(): void{
    
  }

  getEvents(): Observable<calEvent[]> {
    const eventsList = of(this.events);
    return eventsList
  }


}
