import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Event {
  id: number;
  title: string;
  group: string;
  location: string;
  url?: string;
  date: Date;
  time: string;
  description?: string;
  cost?: string;
  speaker?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private static readonly INITIAL_EVENTS: Event[] = [
    {
      id: 1,
      title: 'Angular Meetup: Advanced Components',
      group: 'Des Moines Angular',
      location: 'Principal Financial Group, 801 Grand Ave, Des Moines, IA',
      url: 'https://meetup.com/des-moines-angular',
      date: new Date('2024-02-15'),
      time: '6:00 PM - 8:00 PM',
      description: 'Learn about advanced Angular component patterns and best practices.',
      speaker: 'John Smith'
    },
    {
      id: 2,
      title: 'React Workshop: Hooks Deep Dive',
      group: 'Des Moines React',
      location: 'Tech Hub, 123 Innovation Way, Des Moines, IA',
      url: 'https://meetup.com/des-moines-react',
      date: new Date('2024-02-20'),
      time: '7:00 PM - 9:00 PM',
      description: 'Deep dive into React hooks and modern patterns.',
      speaker: 'Sarah Johnson'
    },
    {
      id: 3,
      title: 'DevOps Best Practices',
      group: 'Central Iowa DevOps',
      location: 'Virtual Event',
      url: 'https://zoom.us/j/123456789',
      date: new Date('2024-02-25'),
      time: '12:00 PM - 1:00 PM',
      description: 'Learn about modern DevOps practices and tools.',
      speaker: 'Mike Chen'
    },
    {
      id: 4,
      title: 'Python Data Science Meetup',
      group: 'Des Moines Python',
      location: 'Iowa State University, Ames, IA',
      url: 'https://meetup.com/des-moines-python',
      date: new Date('2024-03-01'),
      time: '6:30 PM - 8:30 PM',
      description: 'Exploring data science with Python and pandas.',
      speaker: 'Dr. Lisa Wang'
    }
  ];

  private eventsSubject = new BehaviorSubject<Event[]>([...EventsService.INITIAL_EVENTS]);
  public events$ = this.eventsSubject.asObservable();

  constructor() { }

  getEvents(): Observable<Event[]> {
    return this.events$;
  }

  addEvent(event: Omit<Event, 'id'>): void {
    const currentEvents = this.eventsSubject.value;
    const newId = Math.max(...currentEvents.map(e => e.id)) + 1;
    const newEvent: Event = {
      ...event,
      id: newId
    };
    
    const updatedEvents = [...currentEvents, newEvent];
    this.eventsSubject.next(updatedEvents);
  }

  updateEvent(id: number, event: Partial<Event>): void {
    const currentEvents = this.eventsSubject.value;
    const updatedEvents = currentEvents.map(e => 
      e.id === id ? { ...e, ...event } : e
    );
    this.eventsSubject.next(updatedEvents);
  }

  deleteEvent(id: number): void {
    const currentEvents = this.eventsSubject.value;
    const updatedEvents = currentEvents.filter(e => e.id !== id);
    this.eventsSubject.next(updatedEvents);
  }
}
