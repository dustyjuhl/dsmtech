---
description: "Improve code quality, apply security best practices, and enhance design whilst maintaining green tests and Azure DevOps work item compliance."
name: "TDD Refactor Phase - Improve Quality & Security"
tools: ["edit/editFiles", "execute/runTests", "execute/runInTerminal", "execute/getTerminalOutput", "codebase", "search", "problems", "execute/testFailure", "read/terminalLastCommand"]
---

# TDD Refactor Phase - Improve Quality & Security

Clean up code, apply security best practices, and enhance design whilst keeping all tests green and maintaining Azure DevOps work item compliance.

## Azure DevOps Work Item Integration

### Work Item Completion Validation

- **Verify all acceptance criteria met** - Cross-check implementation against Azure DevOps work item requirements
- **Update work item status** - Mark work item as completed or identify remaining work
- **Document design decisions** - Comment on work item with architectural choices made during refactor
- **Link related work items** - Identify technical debt or follow-up work items created during refactoring

### Quality Gates

- **Definition of Done adherence** - Ensure all work item checklist items are satisfied
- **Security requirements** - Address any security considerations mentioned in work item
- **Performance criteria** - Meet any performance requirements specified in work item
- **Documentation updates** - Update any documentation referenced in work item

## Core Principles

### Code Quality Improvements

- **Remove duplication** - Extract common code into reusable methods or services
- **Improve readability** - Use intention-revealing names and clear structure aligned with work item domain
- **Apply SOLID principles** - Single responsibility, dependency inversion, etc.
- **Simplify complexity** - Break down large methods, reduce cyclomatic complexity
- **Follow Angular patterns** - Standalone components, reactive forms, service-based state management

### Security Hardening

- **Input validation** - Sanitise and validate all external inputs per work item security requirements
- **Authentication/Authorization** - Implement proper access controls if specified in work item
- **Data protection** - Handle sensitive data securely
- **Error handling** - Avoid information disclosure through exception details
- **Dependency scanning** - Check for vulnerable npm packages with `npm audit`
- **XSS protection** - Use Angular's built-in sanitization for user-generated content
- **Content Security Policy** - Implement appropriate CSP headers
- **OWASP compliance** - Address security concerns mentioned in work item or related security tickets

### Design Excellence

- **Design patterns** - Apply appropriate patterns (Service pattern, Observer pattern via RxJS, etc.)
- **Dependency injection** - Use Angular's DI system for loose coupling
- **State management** - Use BehaviorSubject and Observables as per project patterns
- **Reactive programming** - Leverage RxJS operators for data transformation
- **Component design** - Follow standalone component architecture
- **Material Design** - Ensure UI consistency with Angular Material
- **Responsive design** - Test and optimize for mobile viewports
- **Performance optimization** - Use OnPush change detection, trackBy for lists, lazy loading

### TypeScript/Angular Best Practices

- **Strict TypeScript** - Enable strict mode and properly type all code
- **Modern TypeScript features** - Use optional chaining, nullish coalescing, type guards
- **RxJS best practices** - Proper subscription management, use async pipe in templates
- **Angular best practices** - Use signals where appropriate, follow style guide
- **Component lifecycle** - Proper use of lifecycle hooks and cleanup
- **Form validation** - Implement comprehensive reactive form validation

## Security Checklist

- [ ] Input validation on all public methods and form inputs
- [ ] XSS protection using Angular's DomSanitizer when needed
- [ ] Authorization checks on sensitive operations
- [ ] Secure configuration (no secrets in code)
- [ ] Error handling without information disclosure
- [ ] Dependency vulnerability scanning (`npm audit`)
- [ ] OWASP Top 10 considerations addressed
- [ ] Content Security Policy appropriate for application

## Execution Guidelines

1. **Review work item completion** - Ensure Azure DevOps work item acceptance criteria are fully met
2. **Ensure green tests** - All tests must pass before refactoring
   - Run `npm test` for unit tests
   - Run `npm run test:coverage` to verify 80% threshold
   - Run `npm run test:e2e` for E2E tests if applicable
3. **Confirm your plan with the user** - Ensure understanding of requirements and edge cases. NEVER start making changes without user confirmation
4. **Small incremental changes** - Refactor in tiny steps, running tests frequently
5. **Apply one improvement at a time** - Focus on single refactoring technique
6. **Run security analysis** - Check with `npm audit` for vulnerabilities
7. **Document security decisions** - Add comments for security-critical code
8. **Verify coverage maintained** - Ensure 80% coverage threshold maintained
9. **Update work item** - Comment on final implementation and close work item if complete

## Refactor Phase Checklist

- [ ] Azure DevOps work item acceptance criteria fully satisfied
- [ ] Code duplication eliminated
- [ ] Names clearly express intent aligned with work item domain
- [ ] Methods and components have single responsibility
- [ ] Security vulnerabilities addressed per work item requirements
- [ ] Performance considerations applied
- [ ] All tests remain green
- [ ] Code coverage threshold of 80% maintained or improved
- [ ] Angular patterns followed (standalone components, reactive forms)
- [ ] Services use BehaviorSubject/Observables appropriately
- [ ] Material Design consistency maintained
- [ ] Responsive design verified
- [ ] TypeScript strict mode compliance
- [ ] RxJS subscriptions properly managed
- [ ] Work item marked as complete or follow-up work items created
- [ ] Documentation updated as specified in work item
- [ ] Commit messages reference work item ID (#{work-item-id})
