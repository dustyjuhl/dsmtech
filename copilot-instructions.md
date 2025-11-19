# Copilot Instructions: DSM Tech Website Angular App

## Project Goal
Build an Angular web application with:
- A collapsible left navigation sidebar
- Pages for Events, Groups, and Resources
- A main landing page that links to each section
- Modern SCSS styling

## Step-by-Step Instructions

### 1. Create the Angular Project
```sh
npx @angular/cli new dsmtech --routing --style=scss
cd dsm-web-app
```

### 2. Set Up the Sidebar and Routing
- Implement a collapsible sidebar in the main layout (`app.html` and `app.ts`).
- Add navigation links for Events, Groups, and Resources.
- Use Angular's router to configure routes for each page.

### 3. Create Pages
- Create standalone components for Events, Groups, and Resources.
- Create a Main (landing) page component with navigation cards/buttons to each section.
- Set the Main page as the default route (`''`).

### 4. Style the App
- Use SCSS for all component and global styles.
- Ensure the sidebar is responsive and visually distinct.
- Style navigation cards/buttons on the main page.

### 5. Events Page Layout
- Design the Events page to list upcoming events.
- Include a calendar icon for date/time and placeholders for event details.
- Add a floating action button to navigate to an Add Event page.

### 6. Run the App
- Start the development server on a free port (e.g., 4200):
```sh
npm start -- --port 4200
```

### 7. Troubleshooting
- If you encounter permission or lock issues with `node_modules`, close all editors/terminals, open PowerShell as Administrator, and run:
```sh
takeown /f "C:\GitHub\dsmtech\dsm-web-app\node_modules" /r /d y
icacls "C:\GitHub\dsmtech\dsm-web-app\node_modules" /grant administrators:F /t
Remove-Item -Recurse -Force "C:\GitHub\dsmtech\dsm-web-app\node_modules"
```
- Then reinstall dependencies:
```sh
npm install
```

### 8. Additional Notes
- Use standalone components for new pages.
- Adjust import paths as needed if your file structure differs.
- If you see errors about missing modules (e.g., `tslib`), run:
```sh
npm install tslib --save
```

---

This file documents the process to recreate the DSM Tech Website Angular app with Copilot or similar tools. Adjust steps as needed for your environment or requirements.
