# Copilot Instructions

This file contains instructions for AI coding assistants working on this project.

## Project Overview

This is a web application built with Angular, focusing on displaying tech groups and events in the Des Moines area.

## Key Technologies

- **Angular** (Standalone Components)
- **Angular Material** for UI components
- **TypeScript**
- **SCSS** for styling
- **RxJS** for reactive programming

## Project Structure

- `dsm-web-app/` - Main Angular application
  - `src/app/` - Application source code
    - `groups/` - Groups page component
    - `events/` - Events page component
    - `add-group/` - Add Group page component
    - `add-event/` - Add Event page component
    - `edit-event/` - Edit Event page component
    - `navigation/` - Navigation component
    - `services/` - Services for data management
      - `groups.ts` - Groups service
      - `events.ts` - Events service

## Important Patterns

1. **Standalone Components**: All components use Angular's standalone component pattern
2. **Services**: Data is managed through services using BehaviorSubject and Observables
3. **Reactive Forms**: Forms use Angular Reactive Forms
4. **Material Design**: UI follows Material Design principles
5. **Alphabetical Sorting**: Groups are sorted alphabetically by name

## Styling Guidelines

- Use SCSS for component styles
- Follow Material Design spacing and color guidelines
- Ensure responsive design for mobile devices
- Match existing component styles when adding new features

## Data Management

- Groups and Events are stored in services using BehaviorSubject
- Groups are automatically sorted alphabetically by name
- Social media icons use SVG with brand colors
- Logo images have error handling with placeholder fallbacks
