import { Component } from '@angular/core';
import { calEvent } from '../event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent {
  constructor(){

  }
  events:calEvent[] = [];

  ngOnInit(): void{
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
}
