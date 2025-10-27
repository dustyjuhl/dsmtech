import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EventsService } from '../services/events';

@Component({
  selector: 'app-add-event',
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
  templateUrl: './add-event.html',
  styleUrl: './add-event.scss',
})
export class AddEvent {
  eventForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
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

  onSubmit() {
    if (this.eventForm.valid) {
      const eventData = this.eventForm.value;
      console.log('New event data:', eventData);
      
      // Save the event using the service
      this.eventsService.addEvent(eventData);
      
      // Navigate back to events page
      this.router.navigate(['/events']);
    }
  }

  goBack() {
    this.router.navigate(['/events']);
  }
}
