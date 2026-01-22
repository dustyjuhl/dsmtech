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
- **Jest** for unit testing
- **Playwright** for end-to-end testing

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

## Testing

### Unit Testing with Jest

- **Framework**: Jest with `jest-preset-angular`
- **Configuration**: [dsm-web-app/jest.config.ts](../../dsm-web-app/jest.config.ts)
- **Setup**: [dsm-web-app/src/setup-jest.ts](../../dsm-web-app/src/setup-jest.ts)
- **Test Files**: `*.spec.ts` files located alongside components and services
- **Coverage Threshold**: 80% for branches, functions, lines, and statements

**Running Tests**:
```bash
npm test              # Run tests once
npm run test:watch    # Run in watch mode
npm run test:coverage # Run with coverage report
npm run test:ci       # Run in CI mode (runInBand)
```

### E2E Testing with Playwright

- **Framework**: Playwright
- **Test Files**: E2E tests excluded from Jest via `testPathIgnorePatterns`
- **Installed Version**: ^1.56.1

**Running E2E Tests**:
```bash
npm run test:e2e      # Run E2E tests
npm run test:e2e:ui   # Run with Playwright UI mode
```

## AI Agent Instructions & Configuration

This project includes additional instructions and agent configurations in the `.github` directory:

- **Agent Definitions**: `.github/agents/` - Custom agent configurations
- **Copilot Instructions**: `.github/instructions/copilot-instructions.md` (this file)
- **Additional Instructions**: `.github/instructions/` - Context-specific instruction files

When creating or modifying code, AI assistants should reference these files to ensure consistency with project conventions and patterns.

## Development Workflow

This project uses Azure DevOps for work item tracking and GitHub for source control.

### Standard Feature Development Flow

1. **Create a User Story** in Azure DevOps
   - Document the feature requirements and acceptance criteria
   - Assign appropriate labels and priority

2. **Capture the User Story Number**
   - Note the work item ID (e.g., 123456)
   - This will be used for branch naming and commit tracking

3. **Create a Feature Branch**
   - Branch naming convention: `{work-item-id}-{feature-description}`
   - Example: `123456-add-event-filter` or `123456-feature`
   ```bash
   git checkout -b 123456-feature-name
   ```

4. **Make Code Changes**
   - Follow the established patterns and conventions
   - Write unit tests for new functionality
   - Ensure existing tests still pass
   - Update documentation as needed

5. **Commit Changes**
   - Write clear, descriptive commit messages
   - Reference the work item ID in commits
   - Commit message format:
     ```
     #{work-item-id}: Brief description of changes
     
     Detailed explanation of what changed and why (if needed)
     ```
   - Example:
     ```
     #123456: Add event filtering by category
     
     - Implement dropdown filter in events component
     - Update events service to filter by category
     - Add unit tests for filter functionality
     ```

6. **Push Changes to GitHub**
   ```bash
   git push origin 123456-feature-name
   ```

### Pull Request Checklist

Even without formal PR reviewers, use this checklist to ensure code quality:

- [ ] All unit tests pass (`npm test`)
- [ ] Code coverage meets 80% threshold
- [ ] E2E tests pass (if applicable, `npm run test:e2e`)
- [ ] No linting errors or warnings
- [ ] Code follows established patterns and conventions
- [ ] Component styles match existing design patterns
- [ ] Responsive design tested on mobile viewports
- [ ] New functionality has appropriate unit tests
- [ ] Documentation updated (if needed)
- [ ] Commit messages reference work item ID
- [ ] Branch name follows convention ({work-item-id}-{feature})

### Notes

- This project does not use separate development/staging/production environments
- Pull requests do not require formal review but should be self-reviewed against the checklist
- Work items in Azure DevOps should be updated with PR links and completion status