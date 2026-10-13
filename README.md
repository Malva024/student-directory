# Student Directory — React + Bootstrap

A single-page React implementation of the provided StudentPortal directory reference. It uses React components and props, Bootstrap 5, `useState`, event handlers, conditional rendering, search, pagination, a dismissible alert, and responsive cards.

## Run the project

1. Install Node.js LTS from https://nodejs.org/en/download if it is not installed.
2. Extract this folder and open it in VS Code.
3. In the terminal, make sure you are in the folder containing `package.json`.
4. On Windows PowerShell, use these commands if `npm` is blocked by script policy:

```powershell
npm.cmd install
npm.cmd run dev
```

5. Open the localhost URL printed by Vite.

## Features

- Navbar, breadcrumb, student cards, pagination, alert, footer, and responsive Bootstrap grid.
- Reusable `StudentCard` component receives the student and event handlers through props.
- **View Profile** increments that student's view counter and opens a profile panel.
- **Show Details / Hide Details** toggles email and profile view counts using React state.
- Search filters the directory; pagination adapts to filtered results.
- Delete removes a student from React state and displays a status alert.

## Submission

Capture a screenshot of the running browser page. To submit on GitHub, create your own repository, then run these commands from this project folder:

```powershell
git init
git add .
git commit -m "Build responsive Student Directory"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/student-directory-assignment.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. This chat cannot push changes directly to the linked repository, so this ZIP contains a ready-to-run replacement project.
