import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EventsListComponent } from './events-list/events-list.component';
import { FilterListComponent } from './filter-list/filter-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    FilterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
