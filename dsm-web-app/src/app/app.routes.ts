import { Routes } from '@angular/router';
import { Events } from './events/events';
import { Groups } from './groups/groups';
import { Resources } from './resources/resources';
import { AddEvent } from './add-event/add-event';
import { EditEvent } from './edit-event/edit-event';
import { AddGroup } from './add-group/add-group';
import { EditGroup } from './edit-group/edit-group';

export const routes: Routes = [
  { path: 'events', component: Events },
  { path: 'groups', component: Groups },
  { path: 'resources', component: Resources },
  { path: 'add-event', component: AddEvent },
  { path: 'edit-event/:id', component: EditEvent },
  { path: 'add-group', component: AddGroup },
  { path: 'edit-group/:id', component: EditGroup },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
