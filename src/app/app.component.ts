import { Component, NgModule } from '@angular/core';
import { EventsListComponent } from './events-list/events-list.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Event Commander';
  loggedIn = false;
  options:string[] = ["Add", "Edit"]; //Im not sure that this is how we want to accomplish this. but maybe it can allow for events to be editted or removed by a bool.
  filterHost:string ="";
  
  //Should probably create a modal to enter the information
  addEvent(){
    
  }
  //This could just pass a bool to app.component or an eventslist component.
  editEvent(id:number){

  }
  removeEvent(id:number){

  }

  filterPass(filter:string){
    this.filterHost = filter;
  }

}
