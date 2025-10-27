import { Routes } from '@angular/router';
import { Events } from './events/events';
import { Groups } from './groups/groups';
import { Resources } from './resources/resources';
import { AddEvent } from './add-event/add-event';
import { EditEvent } from './edit-event/edit-event';

export const routes: Routes = [
  { path: 'events', component: Events },
  { path: 'groups', component: Groups },
  { path: 'resources', component: Resources },
  { path: 'add-event', component: AddEvent },
  { path: 'edit-event/:id', component: EditEvent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
