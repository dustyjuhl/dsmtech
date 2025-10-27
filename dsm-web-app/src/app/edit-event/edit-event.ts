import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService, Event } from '../services/events';

@Component({
  selector: 'app-edit-event',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule
  ],
  templateUrl: './edit-event.html',
  styleUrl: './edit-event.scss',
})
export class EditEvent implements OnInit {
  eventForm: FormGroup;
  eventId: number = 0;
  currentEvent: Event | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      group: ['', Validators.required],
      location: ['', Validators.required],
      url: [''],
      date: ['', Validators.required],
      time: ['', Validators.required],
      description: [''],
      speaker: [''],
      cost: ['']
    });
  }

  ngOnInit() {
    this.eventId = +this.route.snapshot.paramMap.get('id')!;
    this.loadEvent();
  }

  private loadEvent() {
    this.eventsService.getEvents().subscribe(events => {
      this.currentEvent = events.find(e => e.id === this.eventId) || null;
      if (this.currentEvent) {
        this.eventForm.patchValue({
          title: this.currentEvent.title,
          group: this.currentEvent.group,
          location: this.currentEvent.location,
          url: this.currentEvent.url || '',
          date: this.currentEvent.date,
          time: this.currentEvent.time,
          description: this.currentEvent.description || '',
          speaker: this.currentEvent.speaker || '',
          cost: this.currentEvent.cost || ''
        });
      }
    });
  }

  onSubmit() {
    if (this.eventForm.valid && this.currentEvent) {
      const eventData = this.eventForm.value;
      console.log('Updated event data:', eventData);
      
      // Update the event using the service
      this.eventsService.updateEvent(this.eventId, eventData);
      
      // Navigate back to events page
      this.router.navigate(['/events']);
    }
  }

  goBack() {
    this.router.navigate(['/events']);
  }
}
