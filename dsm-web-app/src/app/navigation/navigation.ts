import { Component, Renderer2 } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  isExpanded = false; // Sidebar is collapsed by default

  constructor(private renderer: Renderer2) {}

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    const bodyContainer = document.querySelector('.body-container') as HTMLElement;

    if (this.isExpanded) {
      this.renderer.setStyle(sidebar, 'width', '250px');
      this.renderer.setStyle(bodyContainer, 'margin-left', '250px');
    } else {
      this.renderer.setStyle(sidebar, 'width', '64px');
      this.renderer.setStyle(bodyContainer, 'margin-left', '64px');
    }
  }
}
