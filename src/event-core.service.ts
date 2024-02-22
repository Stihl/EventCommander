import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { calEvent } from './app/event';
import { Observable, Subscription, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventCoreService {

  activatedSubject = new Subject<calEvent>();
  
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
  //private firstObsSub: Subscription = new Subscription();
  private events:calEvent[] = [];

  ngOnInit(): void{
    //this.addEvents();
  }
  ngOnDestroy(){
    
  }
  setEvent(event:calEvent):void {
    this.events.push(event);
  }
  /*
  newEvent(event:calEvent):Observable<calEvent> {
    
    return  this.events.push(event); //HTTP call
  }
  */
  
  getEvents(): Observable<calEvent[]> {
    const eventsList = of(this.events);
    return eventsList
  }


}
