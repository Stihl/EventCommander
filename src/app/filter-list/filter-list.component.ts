import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrl: './filter-list.component.css'
})
export class FilterListComponent {
  categories:string[] = ["Work","Hobby","Family","Medical", "Financial", "Chore"]
}
