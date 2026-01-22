import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface SocialMedia {
  website?: string;
  meetup?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  slack?: string;
  discord?: string;
  youtube?: string;
}

export interface Group {
  id: number;
  name: string;
  location: string;
  description: string;
  logoUrl?: string;
  socialMedia?: SocialMedia;
}

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  private static readonly INITIAL_GROUPS: Group[] = [
    {
      id: 1,
      name: 'Des Moines Angular',
      location: 'Des Moines, IA',
      description: 'A community of Angular developers in the Des Moines area. We meet monthly to discuss Angular best practices, share knowledge, and network.',
      logoUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      socialMedia: {
        website: 'https://desmoinesangular.com',
        meetup: 'https://meetup.com/des-moines-angular',
        twitter: 'https://twitter.com/dsmangular'
      }
    },
    {
      id: 2,
      name: 'Des Moines React',
      location: 'Des Moines, IA',
      description: 'React developers and enthusiasts gathering to share experiences, learn new techniques, and build amazing applications together.',
      logoUrl: 'https://react.dev/images/logo-og.png',
      socialMedia: {
        website: 'https://desmoinesreact.com',
        meetup: 'https://meetup.com/des-moines-react',
        github: 'https://github.com/desmoines-react'
      }
    },
    {
      id: 3,
      name: 'Central Iowa DevOps',
      location: 'Central Iowa',
      description: 'DevOps professionals and enthusiasts focused on automation, CI/CD, cloud infrastructure, and modern software delivery practices.',
      socialMedia: {
        meetup: 'https://meetup.com/central-iowa-devops',
        slack: 'https://centraliowadevops.slack.com',
        linkedin: 'https://linkedin.com/groups/central-iowa-devops'
      }
    },
    {
      id: 4,
      name: 'Des Moines Python',
      location: 'Des Moines, IA',
      description: 'Python developers and data scientists meeting to explore Python libraries, data analysis, machine learning, and automation.',
      logoUrl: 'https://www.python.org/static/community_logos/python-logo.png',
      socialMedia: {
        website: 'https://desmoinespython.org',
        meetup: 'https://meetup.com/des-moines-python',
        github: 'https://github.com/desmoines-python'
      }
    },
    {
      id: 5,
      name: 'Iowa .NET User Group',
      location: 'Des Moines, IA',
      description: 'Microsoft .NET developers sharing knowledge about C#, ASP.NET, Azure, and the broader .NET ecosystem.',
      socialMedia: {
        website: 'https://iowadotnet.org',
        meetup: 'https://meetup.com/iowa-dotnet',
        linkedin: 'https://linkedin.com/groups/iowa-dotnet'
      }
    }
  ];

  private groupsSubject = new BehaviorSubject<Group[]>(this.sortGroups([...GroupsService.INITIAL_GROUPS]));
  public groups$ = this.groupsSubject.asObservable();

  constructor() { }

  private sortGroups(groups: Group[]): Group[] {
    return [...groups].sort((a, b) => a.name.localeCompare(b.name));
  }

  getGroups(): Observable<Group[]> {
    return this.groups$;
  }

  getGroupById(id: number): Observable<Group | undefined> {
    return new Observable(observer => {
      this.groups$.subscribe(groups => {
        const group = groups.find(g => g.id === id);
        observer.next(group);
      });
    });
  }

  addGroup(group: Omit<Group, 'id'>): void {
    const currentGroups = this.groupsSubject.value;
    const newId = Math.max(...currentGroups.map(g => g.id), 0) + 1;
    const newGroup: Group = {
      ...group,
      id: newId
    };
    
    const updatedGroups = [...currentGroups, newGroup];
    this.groupsSubject.next(this.sortGroups(updatedGroups));
  }

  updateGroup(id: number, group: Partial<Group>): void {
    const currentGroups = this.groupsSubject.value;
    const updatedGroups = currentGroups.map(g => 
      g.id === id ? { ...g, ...group } : g
    );
    this.groupsSubject.next(this.sortGroups(updatedGroups));
  }

  deleteGroup(id: number): void {
    const currentGroups = this.groupsSubject.value;
    const updatedGroups = currentGroups.filter(g => g.id !== id);
    this.groupsSubject.next(this.sortGroups(updatedGroups));
  }
}
