import { test, expect } from '@playwright/test';

test.describe('Add New Event Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the events page
    await page.goto('/events');
    await expect(page.locator('h1')).toContainText('Upcoming Events');
  });

  test('should successfully add a new event with all required fields', async ({ page }) => {
    // Click the floating action button to add a new event
    await page.click('button.fab-add-event');

    // Wait for navigation to add-event page
    await expect(page).toHaveURL('/add-event');
    await expect(page.locator('h1')).toContainText('Add New Event');

    // Fill in the required fields
    await page.fill('input[formcontrolname="title"]', 'Angular Deep Dive Workshop');
    await page.fill('input[formcontrolname="group"]', 'Angular DSM');
    await page.fill('input[formcontrolname="location"]', 'TechHub Downtown');
    
    // Fill in the date field by typing directly
    await page.fill('input[formcontrolname="date"]', '2/15/2026');
    
    // Fill in the time field
    await page.fill('input[formcontrolname="time"]', '6:00 PM - 8:00 PM');

    // Optionally fill in additional fields
    await page.fill('input[formcontrolname="url"]', 'https://example.com/angular-workshop');
    await page.fill('textarea[formcontrolname="description"]', 'Join us for an in-depth workshop on Angular best practices and advanced patterns.');
    await page.fill('input[formcontrolname="speaker"]', 'Jane Developer');
    await page.fill('input[formcontrolname="cost"]', 'Free');

    // Click the Save button
    await page.click('button[type="submit"]:has-text("Save")');

    // Verify navigation back to events page
    await expect(page).toHaveURL('/events');

    // Verify the new event appears in the list
    await expect(page.getByText('Angular Deep Dive Workshop')).toBeVisible();
  });

  test('should not allow submission with missing required fields', async ({ page }) => {
    // Click the floating action button to add a new event
    await page.click('button.fab-add-event');

    // Wait for navigation to add-event page
    await expect(page).toHaveURL('/add-event');

    // Try to submit without filling any fields
    const saveButton = page.locator('button[type="submit"]:has-text("Save")');
    
    // The save button should be disabled
    await expect(saveButton).toBeDisabled();
  });

  test('should allow canceling and return to events page', async ({ page }) => {
    // Click the floating action button to add a new event
    await page.click('button.fab-add-event');

    // Wait for navigation to add-event page
    await expect(page).toHaveURL('/add-event');

    // Fill in some fields
    await page.fill('input[formcontrolname="title"]', 'Test Event');

    // Click the Cancel button
    await page.click('button:has-text("Cancel")');

    // Verify navigation back to events page
    await expect(page).toHaveURL('/events');
  });

  test('should allow navigation back using back button', async ({ page }) => {
    // Click the floating action button to add a new event
    await page.click('button.fab-add-event');

    // Wait for navigation to add-event page
    await expect(page).toHaveURL('/add-event');

    // Click the back button in the header
    await page.click('button.back-button');

    // Verify navigation back to events page
    await expect(page).toHaveURL('/events');
  });

  test('should validate required fields when left empty', async ({ page }) => {
    // Click the floating action button to add a new event
    await page.click('button.fab-add-event');

    // Wait for navigation to add-event page
    await expect(page).toHaveURL('/add-event');

    // Focus and blur title field to trigger validation
    const titleInput = page.locator('input[formcontrolname="title"]');
    await titleInput.focus();
    await titleInput.blur();

    // Check for error message
    await expect(page.getByText('Event title is required')).toBeVisible();

    // Focus and blur group field to trigger validation
    const groupInput = page.locator('input[formcontrolname="group"]');
    await groupInput.focus();
    await groupInput.blur();

    // Check for error message
    await expect(page.getByText('Group name is required')).toBeVisible();
  });
});
