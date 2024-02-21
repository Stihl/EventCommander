import { Component, NgModule } from '@angular/core';
import { EventsListComponent } from './events-list/events-list.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { NgIf, NgFor } from '@angular/common';
import { Observable, Subscription, interval, of } from 'rxjs';
import { calEvent } from './event';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Event Commander';
  loggedIn = false;
   //Im not sure that this is how we want to accomplish this. but maybe it can allow for events to be editted or removed by a bool.
  filterHost:string ="";
  private firstObsSub: Subscription = new Subscription();
  
  ngOnInit(){
     /* this.firstObsSub = interval(1000).subscribe(count=>{
      console.log(count);
    }); */ 

    /* const customInterObser = new Observable((observer)=>{
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if(count > 3){
          observer.error(new Error('count is greater 3!'));
        }
        count++;
      },1000);
    });

    this.firstObsSub = customInterObser.subscribe({
      next: (data)=>{
        data:console.log(data)
      },
      error:(error)=>{
        alert(error.message)  
      }
    }); */
  }
  
  ngOnDestroy():void{
    /* this.firstObsSub.unsubscribe(); */
  }
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
