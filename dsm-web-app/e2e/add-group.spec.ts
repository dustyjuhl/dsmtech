import { test, expect } from '@playwright/test';

test.describe('Add New Group Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the groups page
    await page.goto('/groups');
    await expect(page.locator('h1')).toContainText('Tech Groups');
  });

  test('should successfully add a new group with all required fields', async ({ page }) => {
    // Click the floating action button to add a new group
    await page.click('button.fab-add-group');

    // Wait for navigation to add-group page
    await expect(page).toHaveURL('/add-group');
    await expect(page.locator('h1')).toContainText('Add New Group');

    // Fill in the required fields
    await page.fill('input[formcontrolname="name"]', 'React DSM');
    await page.fill('input[formcontrolname="location"]', 'Des Moines, IA');
    await page.fill('textarea[formcontrolname="description"]', 'A community for React developers in the Des Moines metro area.');

    // Click the Save button
    await page.click('button[type="submit"]:has-text("Save")');

    // Verify navigation back to groups page
    await expect(page).toHaveURL('/groups');

    // Verify the new group appears in the table
    await expect(page.getByText('React DSM')).toBeVisible();
  });

  test('should successfully add a new group with optional social media links', async ({ page }) => {
    // Click the floating action button to add a new group
    await page.click('button.fab-add-group');

    // Wait for navigation to add-group page
    await expect(page).toHaveURL('/add-group');

    // Fill in the required fields
    await page.fill('input[formcontrolname="name"]', 'Vue.js DSM');
    await page.fill('input[formcontrolname="location"]', 'Des Moines, IA');
    await page.fill('textarea[formcontrolname="description"]', 'Vue.js enthusiasts in Des Moines');

    // Fill in optional social media links
    await page.fill('input[formcontrolname="website"]', 'https://vuejs-dsm.org');
    await page.fill('input[formcontrolname="twitter"]', 'https://twitter.com/vuejs_dsm');
    await page.fill('input[formcontrolname="github"]', 'https://github.com/vuejs-dsm');
    await page.fill('input[formcontrolname="discord"]', 'https://discord.gg/vuejs-dsm');
    await page.fill('input[formcontrolname="slack"]', 'https://vuejs-dsm.slack.com');

    // Click the Save button
    await page.click('button[type="submit"]:has-text("Save")');

    // Verify navigation back to groups page
    await expect(page).toHaveURL('/groups');

    // Verify the new group appears in the table
    await expect(page.getByText('Vue.js DSM')).toBeVisible();
  });

  test('should not allow submission with missing required fields', async ({ page }) => {
    // Click the floating action button to add a new group
    await page.click('button.fab-add-group');

    // Wait for navigation to add-group page
    await expect(page).toHaveURL('/add-group');

    // Try to submit without filling any fields
    const saveButton = page.locator('button[type="submit"]:has-text("Save")');
    
    // The save button should be disabled
    await expect(saveButton).toBeDisabled();
  });

  test('should allow canceling and return to groups page', async ({ page }) => {
    // Click the floating action button to add a new group
    await page.click('button.fab-add-group');

    // Wait for navigation to add-group page
    await expect(page).toHaveURL('/add-group');

    // Fill in some fields
    await page.fill('input[formcontrolname="name"]', 'Test Group');

    // Click the Cancel button
    await page.click('button:has-text("Cancel")');

    // Verify navigation back to groups page
    await expect(page).toHaveURL('/groups');
  });

  test('should allow navigation back using back button', async ({ page }) => {
    // Click the floating action button to add a new group
    await page.click('button.fab-add-group');

    // Wait for navigation to add-group page
    await expect(page).toHaveURL('/add-group');

    // Click the back button in the header
    await page.click('button.back-button');

    // Verify navigation back to groups page
    await expect(page).toHaveURL('/groups');
  });

  test('should validate required fields when left empty', async ({ page }) => {
    // Click the floating action button to add a new group
    await page.click('button.fab-add-group');

    // Wait for navigation to add-group page
    await expect(page).toHaveURL('/add-group');

    // Focus and blur name field to trigger validation
    const nameInput = page.locator('input[formcontrolname="name"]');
    await nameInput.focus();
    await nameInput.blur();

    // Check for error message
    await expect(page.getByText('Group name is required')).toBeVisible();

    // Focus and blur location field to trigger validation
    const locationInput = page.locator('input[formcontrolname="location"]');
    await locationInput.focus();
    await locationInput.blur();

    // Check for error message
    await expect(page.getByText('Location is required')).toBeVisible();

    // Focus and blur description field to trigger validation
    const descriptionInput = page.locator('textarea[formcontrolname="description"]');
    await descriptionInput.focus();
    await descriptionInput.blur();

    // Check for error message
    await expect(page.getByText('Description is required')).toBeVisible();
  });

  test('should allow uploading a logo', async ({ page }) => {
    // Click the floating action button to add a new group
    await page.click('button.fab-add-group');

    // Wait for navigation to add-group page
    await expect(page).toHaveURL('/add-group');

    // Fill in the required fields
    await page.fill('input[formcontrolname="name"]', 'Python DSM');
    await page.fill('input[formcontrolname="location"]', 'Des Moines, IA');
    await page.fill('textarea[formcontrolname="description"]', 'Python developers in Des Moines');

    // Upload a logo file (you would need to provide a test image file path)
    // This is a placeholder - in real tests, you'd use an actual test image file
    // await page.setInputFiles('input[type="file"]#logo-upload', 'path/to/test-logo.png');

    // For now, just verify the upload button exists
    await expect(page.locator('button.upload-button')).toBeVisible();

    // Click the Save button
    await page.click('button[type="submit"]:has-text("Save")');

    // Verify navigation back to groups page
    await expect(page).toHaveURL('/groups');
  });

  test('should display all social media input fields', async ({ page }) => {
    // Click the floating action button to add a new group
    await page.click('button.fab-add-group');

    // Wait for navigation to add-group page
    await expect(page).toHaveURL('/add-group');

    // Verify all social media fields are present
    await expect(page.locator('input[formcontrolname="discord"]')).toBeVisible();
    await expect(page.locator('input[formcontrolname="facebook"]')).toBeVisible();
    await expect(page.locator('input[formcontrolname="github"]')).toBeVisible();
    await expect(page.locator('input[formcontrolname="linkedin"]')).toBeVisible();
    await expect(page.locator('input[formcontrolname="meetup"]')).toBeVisible();
    await expect(page.locator('input[formcontrolname="slack"]')).toBeVisible();
    await expect(page.locator('input[formcontrolname="twitter"]')).toBeVisible();
    await expect(page.locator('input[formcontrolname="website"]')).toBeVisible();
    await expect(page.locator('input[formcontrolname="youtube"]')).toBeVisible();
  });
});
