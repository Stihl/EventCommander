import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { calEvent } from '../event';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrl: './filter-list.component.css'
})

export class FilterListComponent {
  categories:string[] = ["Reset","Work","Hobby","Family","Medical", "Financial", "Chore"]
  filterText:string = "";

  filterBy(item:string){
    this.filterEvent.emit(item);
  }
  


  @Output()filterEvent = new EventEmitter<string>();
}
