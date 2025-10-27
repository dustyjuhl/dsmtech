import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EventsService, Event } from '../services/events';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    CommonModule
  ],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class Events implements OnInit {
  events$: Observable<Event[]>;

  constructor(
    private router: Router,
    private eventsService: EventsService
  ) {
    this.events$ = this.eventsService.getEvents();
  }

  ngOnInit() {
    // Events are automatically loaded from the service
  }

  navigateToAddEvent() {
    this.router.navigate(['/add-event']);
  }

  editEvent(eventId: number) {
    this.router.navigate(['/edit-event', eventId]);
  }
}
